import { Database } from "../Database/Database";
import { WalletService } from "./WalletService";
import Crypto from 'crypto'
import jwtService from 'jsonwebtoken'
import 'dotenv/config'

export class UserService {

    public async registerUser(name: string, password: string, email: string, telephone: string, birthday: string) {
        const encryptedPassword = Crypto.createHash('sha256').update(password).digest('hex')
        const isEmailUsed = await this.getUserByEmail(email)
        const isTelephoneUsed = await this.getUserByTelephone(telephone)
        if (isEmailUsed !== null || isTelephoneUsed !== null) {
            return 409
        }
        const walletID = await new WalletService().addWallet()
        if (walletID == undefined || walletID === null) {
            throw new Error("Error while retrieving wallet id")
        }
        const newUser = await this.createUser(name, encryptedPassword, email, telephone, birthday, walletID)
        return newUser
    }

    public async createUser(name: string, password: string, email: string, telephone: string, birthday: string, walletID: any) {
        const user = await Database.user.create({
            email: email,
            telephone: telephone,
            name: name,
            birthday: birthday,
            password: password,
            walletID: walletID
        })
        return user
    }

    public async login(email: string, telephone: string, password: string): Promise<{ token: any, user: any } | null | undefined> {
        const encryptedPassword = Crypto.createHash('sha256').update(password).digest('hex')
        let user: any
        if (email != undefined) {
            user = await this.getUserByEmailAndPassword(email, encryptedPassword)
        } else {
            user = await this.getUserByTelephoneAndPassword(telephone, encryptedPassword)
        }
        if (user === null) {
            return null
        }

        const TOKEN = process.env.TOKEN
        if (!TOKEN) {
            throw new Error("The API was not able to find an internal token")
        }

        var token = jwtService.sign({password: password}, TOKEN, { expiresIn: '1d' })
        let responseObject = {
            token: token,
            user: user.dataValues
        }
        return responseObject
    }

    public async getUserByEmailAndPassword(email: string, password: string) {
        const user = await Database.user.findOne({ where: { email: email, password: password } })
        return user
    }

    public async getUserByTelephoneAndPassword(telephone: string, password: string) {
        const user = await Database.user.findOne({ where: { telephone: telephone, password: password } })
        return user
    }

    public async getUserByEmail(email: string) {
        const user = await Database.user.findOne({ where: { email: email } })
        return user
    }

    public async getUserByTelephone(telephone: string) {
        const user = await Database.user.findOne({ where: { telephone: telephone } })
        return user
    }

    public async getUserByID(id: any) {
        const user = await Database.user.findByPk(id)
        return user
    }

    public async getUsers(){
        const userList = await Database.user.findAll()
        return userList
    }
}
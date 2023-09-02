import {Request, Response} from 'express'
import { WalletService } from '../Service/WalletService'

class WalletController{

    public async createWallet(req: Request, res: Response){
        const newWallet = await new WalletService().addWallet()
        res.statusCode = 201
        res.send(newWallet)
    }
}

export default new WalletController()
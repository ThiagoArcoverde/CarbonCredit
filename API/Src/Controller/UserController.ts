import { Request, Response } from "express";
import { UserService } from "../Service/UserService";

class UserController {

    public async registerUser(req: Request, res: Response) {
        try {
            const { name, password, email, telephone, birthday } = req.body
            if (email == undefined && telephone == undefined) {
                res.sendStatus(400)
                return
            }
            if (name == undefined || password == undefined || birthday == undefined) {
                res.sendStatus(400)
                return
            }

            const newUser = await new UserService().registerUser(name, password, email, telephone, birthday)
            if (newUser === null) {
                throw new Error("The API was not able to register the user")
            } else {
                if (newUser == 409) {
                    res.statusCode = 409
                    res.send({ error: "This email or telephone you are trying to register is already in the database"})
                } else {
                    res.statusCode = 200
                    res.send(newUser)
                }
            }

        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const { email, telephone, password } = req.body
            let user = await new UserService().login(email, telephone, password.toString())
            console.log(user)
            if (user === null) {
                res.sendStatus(404)
            } else {
                res.statusCode = 200
                res.send(user)
            }
        } catch (error) {
            console.log(error)
            res.statusCode = 500
            res.send(error)
        }
    }

}

export default new UserController()
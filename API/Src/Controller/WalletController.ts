import {Request, Response} from 'express'
import { WalletService } from '../Service/WalletService'

class WalletController{

    public async getWalletByID(req: Request, res: Response){
        try{
            const wallet = await new WalletService().getWallet(req.params.id)
            if(wallet === null){
                res.sendStatus(404)
            }else{
                res.statusCode = 200
                res.send(wallet)
            }
        }catch(error){
            res.statusCode = 500
            res.send(error)
        }
        
    }
}

export default new WalletController()
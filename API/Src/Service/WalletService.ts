import { Database } from "../Database/Database";

export class WalletService{

    public async addWallet(){
        try{
            const newWallet = await Database.wallet.create({
                credit: 0.0,
                carbonSaved: 0.0
            })
            return newWallet
        }catch(error: any){
            return error
        }
    }

}
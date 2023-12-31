import { Database } from "../Database/Database";

export class WalletService {

    public async addWallet() : Promise<any> {
        try {
            const newWallet = await Database.wallet.create({
                credit: 0.0,
                carbonSaved: 0.0
            })
            return newWallet.id
        } catch (error: any) {
            return error
        }
    }

    public async getWallet(id: any) {
        const wallet = await Database.wallet.findByPk(id)
        return wallet
    }

    public async addCredit(id: any, credit: any){
        const wallet = await Database.wallet.findByPk(id)
        if(wallet === null){
            return 404
        }else{
            try{
                await Database.wallet.update({ credit: (wallet.credit + credit)}, {
                    where: {
                        id: id
                    }
                })
            }catch{
                return 500
            }
            return 200
        }
    }

    public async subCredit(id: any, credit: any){
        const wallet = await Database.wallet.findByPk(id)
        if(wallet === null){
            return 404
        }else{
            try{
                await Database.wallet.update({ credit: (wallet.credit - credit)}, {
                    where: {
                        id: id
                    }
                })
            }catch{
                return 500
            }
            return 200
        }
    }

    public async addCarbonSaved(id: any, carbonSaved: any){
        const wallet = await Database.wallet.findByPk(id)
        if(wallet === null){
            return 404
        }else{
            try{
                await Database.wallet.update({ carbonSaved: (wallet.carbonSaved + carbonSaved)}, {
                    where: {
                        id: id
                    }
                })
            }catch{
                return 500
            }
            return 200
        }
    }

}
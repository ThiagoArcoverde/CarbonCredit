import { Database } from "../Database/Database";
import { Op } from 'sequelize'
import moment from 'moment'

export class PurchaseService {

    public async addPurchase(value: number, walletID: any) {
        const wallet = Database.wallet.findByPk(walletID)
        if (wallet === null) {
            return null
        }

        const newPurchase = Database.purchase.create({
            value: value,
            walletID: walletID
        })
        return newPurchase
    }

    public async getPurchaseByWalletID(id: any) : Promise<any[]>{
        const wallet = Database.wallet.findByPk(id)
        if (wallet === null) {
            return []
        }

        const purchase = Database.purchase.findAll({ where: { walletID: id },  })
        return purchase
    }

    public async getPurchaseByDateAndWalletID(id: any, initialDate: any, finalDate: any): Promise<any[]> {
        const wallet = Database.wallet.findByPk(id)
        if (wallet === null) {
            return []
        }

        const purchase = Database.purchase.findAll({ where: { walletID: id }, transactionDueDate: {
            [Op.between]: [moment().startOf(initialDate), moment().endOf(finalDate)]
          }  })
        return purchase
    }

}
import { Request, Response } from 'express'
import { PurchaseService } from '../Service/PurchaseService'

class PurchaseController {

    public async addPurchase(req: Request, res: Response) {
        try {
            const purchase = req.body
            if (purchase === null || purchase == undefined) {
                res.sendStatus(404)
            } else {
                const value = purchase.value
                if (value == undefined || isNaN(value)) {
                    res.sendStatus(400)
                } else {
                    const walletID = purchase.walletID
                    const newPurchase = await new PurchaseService().addPurchase(value, walletID)
                    if (newPurchase == null) {
                        res.sendStatus(400)
                    } else {
                        res.statusCode = 201
                        res.send(newPurchase)
                    }
                }
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async getPurchaseByWalletID(req: Request, res: Response) {
        try {
            const id = req.params.id
            if (id === null) {
                res.sendStatus(400)
            }
            const purchase = await new PurchaseService().getPurchaseByWalletID(id)
            if (purchase == null || purchase.length == 0) {
                res.sendStatus(404)
            } else {
                res.statusCode = 200
                res.send(purchase)
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async getPurchaseByDateAndWalletID(req: Request, res: Response) {
        try {
            const id = req.params.id
            const initialDate = req.params.initialDate
            const finalDate = req.params.finalDate

            const purchase = await new PurchaseService().getPurchaseByDateAndWalletID(id, initialDate, finalDate)
            if (purchase.length == 0 || purchase == null) {
                res.sendStatus(404)
            } else {
                res.statusCode = 200
                res.send(purchase)
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

}

export default new PurchaseController()
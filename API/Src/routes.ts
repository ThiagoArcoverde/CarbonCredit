import { Router } from 'express'
import WalletController from './Controller/walletController'
import VehicleController from './Controller/VehicleController'
import PurchaseController from './Controller/PurchaseController'

const routes = Router()

//GET ROUTES //

// WALLET

routes.get('/wallet/:id', WalletController.getWalletByID)

// VEHICLE

routes.get('/vehicle', VehicleController.getVehicles)
routes.get('/vehicle/:id', VehicleController.getVehicleByID)

// PURCHASE

routes.get('/purchase/:id',  PurchaseController.getPurchaseByWalletID)
routes.get('/purchase/:id/:initialDate/:finalDate', PurchaseController.getPurchaseByDateAndWalletID )

//POST ROUTES //

// VEHICLE
routes.post('/vehicle',  VehicleController.addVehicle)

// PURCHASE
routes.post('/purchase', PurchaseController.addPurchase)

//PUT ROUTES //

//DELETE ROUTES //

export { routes }
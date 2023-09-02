import { Router } from 'express'
import WalletController from './Controller/walletController'
import VehicleController from './Controller/VehicleController'

const routes = Router()

//GET ROUTES //

// WALLET

routes.get('/wallet/:id', WalletController.getWalletByID)

// VEHICLE

routes.get('/vehicle', VehicleController.getVehicles)
routes.get('/vehicle/:id', VehicleController.getVehicleByID)

//POST ROUTES //

// VEHICLE
routes.post('/vehicle',  VehicleController.addVehicle)

//PUT ROUTES //

//DELETE ROUTES //

export { routes }
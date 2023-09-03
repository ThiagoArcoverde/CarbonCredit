import { Router } from 'express'
import WalletController from './Controller/walletController'
import VehicleController from './Controller/VehicleController'
import PurchaseController from './Controller/PurchaseController'
import CompanyController from './Controller/CompanyController'

const routes = Router()

//GET ROUTES //

// WALLET
routes.get('/wallet/:id', WalletController.getWalletByID)

// VEHICLE
routes.get('/vehicle', VehicleController.getVehicles)
routes.get('/vehicle/:id', VehicleController.getVehicleByID)

// PURCHASE
routes.get('/purchase/:id', PurchaseController.getPurchaseByWalletID)
routes.get('/purchase/:id/:initialDate/:finalDate', PurchaseController.getPurchaseByDateAndWalletID)

// COMPANY
routes.get('/company/:id', CompanyController.getCompanyByID)
routes.get('/partner/company/:accessKey', CompanyController.getCompanyByKey)

//POST ROUTES //

// VEHICLE
routes.post('/vehicle', VehicleController.addVehicle)

// PURCHASE
routes.post('/purchase', PurchaseController.addPurchase)

// COMPANY
routes.post('/company', CompanyController.addCompany)

//PUT ROUTES //


//PATCH ROUTES //

// COMPANY
routes.patch('/partner/company/updateAccessKey', CompanyController.updateCompanyKey)

//DELETE ROUTES //

// COMPANY
routes.delete('/company', CompanyController.deleteCompanyByID)
routes.delete('/partner/company', CompanyController.deleteCompanyByKey)

export { routes }
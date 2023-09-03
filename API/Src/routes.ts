import { Router, Request, Response, NextFunction } from 'express'
import WalletController from './Controller/walletController'
import VehicleController from './Controller/VehicleController'
import PurchaseController from './Controller/PurchaseController'
import CompanyController from './Controller/CompanyController'
import UserController from './Controller/UserController'
import TripController from './Controller/TripController'
import jwtService from 'jsonwebtoken'
import 'dotenv/config'

// AUTH ROUTE
const middlewareAuthJWT = (req: Request, res: Response, next: NextFunction) => {
    require('dotenv').config()

    const jwt = req.headers.authorization
    if(!jwt){
        return res.status(401).send({ error: 'No token provided' });
    }
    const token = process.env.TOKEN
    if(!token){
        return res.status(500).send({error: 'The API was not able to retrieve an internal token'})
    }
    jwtService.verify(jwt, token, (error, userInfo) => {
        if (error) {
            res.status(403).end();
            return;
        }

        // req.userInfo = userInfo;
        next();
    });
} 


const routes = Router()

//GET ROUTES //

// WALLET
routes.get('/wallet/:id', middlewareAuthJWT, WalletController.getWalletByID)

// VEHICLE
routes.get('/vehicle', middlewareAuthJWT, VehicleController.getVehicles)
routes.get('/vehicle/:id', middlewareAuthJWT, VehicleController.getVehicleByID)

// PURCHASE
routes.get('/purchase/:id', middlewareAuthJWT, PurchaseController.getPurchaseByWalletID)
routes.get('/purchase/:id/:initialDate/:finalDate', middlewareAuthJWT, PurchaseController.getPurchaseByDateAndWalletID)

// COMPANY
routes.get('/company/:id', CompanyController.getCompanyByID)
routes.get('/partner/company/:accessKey', CompanyController.getCompanyByKey)

// TRIP
routes.get('/trip/:userID', middlewareAuthJWT, TripController.getTripByUser)
routes.get('/partner/trip/:companyID', TripController.getTripByCompany)

// USER
routes.get('/user', middlewareAuthJWT, UserController.getUsers)

//POST ROUTES //

// VEHICLE
routes.post('/partner/vehicle', VehicleController.addVehicle)

// PURCHASE
routes.post('/partner/purchase', PurchaseController.addPurchase)

// COMPANY
routes.post('/company', CompanyController.addCompany)

// USER
routes.post('/user/register', UserController.registerUser)
routes.post('/user/login', UserController.login)

// TRIP
routes.post('/partner/trip', TripController.addTrip)

//PATCH ROUTES //

// COMPANY
routes.patch('/partner/company/updateAccessKey', middlewareAuthJWT, CompanyController.updateCompanyKey)

//DELETE ROUTES //

// COMPANY
routes.delete('/company', CompanyController.deleteCompanyByID)
routes.delete('/partner/company', CompanyController.deleteCompanyByKey)

export { routes }
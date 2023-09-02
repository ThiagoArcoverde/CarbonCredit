import { Router } from 'express'
import WalletController from './Controller/walletController'

const routes = Router()

//GET ROUTES

// WALLET

routes.get('/wallet/:id', WalletController.getWalletByID)

//POST ROUTES //

//PUT ROUTES

//DELETE ROUTES

export { routes }
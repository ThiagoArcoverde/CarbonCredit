import { Router } from 'express'
import WalletController from './Controller/walletController'

const routes = Router()

//GET ROUTES

//POST ROUTES //

// WALLET

routes.post('/wallet', WalletController.createWallet)

//PUT ROUTES

//DELETE ROUTES

export { routes }
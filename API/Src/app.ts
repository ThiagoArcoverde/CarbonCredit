import express from 'express'
import { routes } from './routes'
import { initializeDatabase } from './Database/database'

class App{
    public express: express.Application

    public constructor(){
        this.express = express()

        this.middleware()
        this.routes()
        this.connectDatabase()
    }

    private middleware(): void{
        this.express.use(express.json());
    }

    private routes() : void{
        this.express.use(routes)
    }

    private async connectDatabase(){
        initializeDatabase()
    }
}
export default new App().express
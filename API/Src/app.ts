import express from 'express'
import { routes } from './routes'
import { database } from './Database/database'

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
        database.authenticate().then(() => {
            console.log('Connection has been established successfully.');
         }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
         });
    }
}
export default new App().express
import express from 'express'
import { routes } from './routes'

class App{
    public express: express.Application


    constructor(){
        this.express = express()

        this.middleware()
        this.routes()
        // this.database()
    }

    private middleware(): void{
        this.express.use(express.json());
    }

    private routes() : void{
        this.express.use(routes)
    }

    // private async database(){
    //     try{
    //         mongoose.set("strictQuery", true)
    //         console.log('Connecting to the database...')
    //         await mongoose.connect('mongodb://0.0.0.0:27017')
    //         console.log('Database connected');
    //     }catch(err){
    //         console.error("Error while connecting to the database ", err)
    //     };
    // }
}
export default new App().express
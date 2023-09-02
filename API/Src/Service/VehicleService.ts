import { Database } from "../Database/Database";

export class VehicleService{

    public async addVehicle(name: string, score: number){
        const newVehicle = await Database.vehicle.create({
            name: name,
            score: score
        })
        return newVehicle
    }

    public async getVehicles(){
        return await Database.vehicle.findAll()
    }

    public async getVehicleByID(id: any){
        return await Database.vehicle.findByPk(id)
    }

}
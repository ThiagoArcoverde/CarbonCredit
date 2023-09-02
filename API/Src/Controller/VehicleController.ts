import { Request, Response } from 'express'
import { VehicleService } from '../Service/VehicleService'

class VehicleController {

    public async getVehicles(req: Request, res: Response) {
        try {
            const vehicleList = await new VehicleService().getVehicles()
            if (vehicleList == null) {
                res.sendStatus(404)
            } else {
                res.statusCode = 200
                res.send(vehicleList)
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async getVehicleByID(req: Request, res: Response) {
        try {
            const vehicle = await new VehicleService().getVehicleByID(req.params.id)
            if (vehicle == null) {
                res.sendStatus(404)
            } else {
                res.statusCode = 200
                res.send(vehicle)
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async addVehicle(req: Request, res: Response) {
        const vehicle = req.body
        if (vehicle === null) {
            res.sendStatus(404)
        } else {
            const vehicleName = vehicle.name
            const vehicleScore = vehicle.score
            if (vehicleName == undefined || vehicleScore == undefined) {
                res.sendStatus(400)
            } else {
                try {
                    const newVehicle = await new VehicleService().addVehicle(vehicleName, vehicleScore)
                    res.statusCode = 201
                    res.send(newVehicle)

                } catch (error) {
                    res.statusCode = 500
                    res.send(error)
                }
            }
        }
    }
}

export default new VehicleController()
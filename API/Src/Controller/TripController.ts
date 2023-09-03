import { Request, Response } from "express"
import { TripService } from "../Service/TripService"

class TripController {

    public async addTrip(req: Request, res: Response) {
        try {
            const tripObject = req.body
            if (tripObject == undefined || tripObject === null) {
                res.sendStatus(400)
            }
            const newTrip = await new TripService().createTrip(tripObject)
            if (newTrip.error == undefined) {
                res.statusCode = 201
                res.send(newTrip)
            } else {
                res.statusCode = newTrip.statusCode
                res.send(newTrip.error)
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async getTripByUser(req: Request, res: Response) {
        try {
            const userID = req.params.userID
            if (userID == undefined) {
                res.sendStatus(400)
            } else {
                const tripList = await new TripService().getTripByUser(userID)
                if (tripList === null) {
                    res.sendStatus(404)
                } else {
                    if (tripList.error != undefined) {
                        res.statusCode = tripList.statusCode
                        res.send(tripList.error)
                    } else {
                        res.statusCode = 200
                        res.send(tripList)
                    }
                }
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async getTripByCompany(req: Request, res: Response) {
        try {
            const companyID = req.params.companyID
            if (companyID == undefined) {
                res.sendStatus(400)
            } else {
                const tripList = await new TripService().getTripByCompany(companyID)
                if (tripList === null) {
                    res.sendStatus(404)
                } else {
                    if (tripList.error != undefined) {
                        res.status = tripList.statusCode
                        res.send(tripList.error)
                    } else {
                        res.statusCode = 200
                        res.send(tripList)
                    }
                }
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }


}

export default new TripController()
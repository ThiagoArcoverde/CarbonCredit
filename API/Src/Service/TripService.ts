import { Database } from "../Database/Database"
import { CompanyService } from "./CompanyService"
import { UserService } from "./UserService"
import { VehicleService } from "./VehicleService"
import { WalletService } from "./WalletService"

export class TripService {
    private static readonly DEFAULT_CARBON_SCORE = 150

    public async createTrip(tripObject: any) {
        const { distance, startLocation, finalLocation, vehicleID, companyID, userID } = tripObject
        if (distance == undefined || vehicleID == undefined || companyID == undefined ||
            userID == undefined || startLocation == undefined || finalLocation == undefined) {
            return { error: "Bad request", statusCode: 400 }
        }
        const user = await new UserService().getUserByID(userID)
        if (user === null) {
            return { error: "User not found", statusCode: 404 }
        }

        const company = await new CompanyService().getCompanyByID(companyID)
        if (company === null) {
            return { error: "Company not found", statusCode: 404 }
        }

        const vehicle = await new VehicleService().getVehicleByID(vehicleID)
        if (vehicle === null) {
            return { error: "Vehicle not found", statusCode: 404 }
        }

        const wallet = await new WalletService().getWallet(user.walletID)
        if (wallet === null) {
            return { error: "Wallet not found", statusCode: 404 }
        }

        const carbonSaved = this.calculateCarbonSaved(vehicle.score)
        const carbonCredit = this.calculateCarbonCredit(distance, carbonSaved)

        const newTrip = await this.addTrip(carbonCredit, carbonSaved, wallet.id, tripObject)
        if (newTrip === null) {
            return { error: "The API was not able to process the trip", statusCode: 500 }
        } else {
            company.tripsRequested += 1
            await Promise.all([
                company.save(),
                new WalletService().addCredit(wallet.id, carbonCredit),
                new WalletService().addCarbonSaved(wallet.id, carbonSaved)
            ])

            return newTrip
        }
    }

    private async addTrip(credit: any, saved: any, walletID: any, tripObject: any) {
        const { distance, startLocation, finalLocation, vehicleID, companyID } = tripObject
        return await Database.trip.create({
            carbonCredit: credit,
            carbonSaved: saved,
            distance: distance,
            startLocation: startLocation,
            finalLocation: finalLocation,
            vehicleID: vehicleID,
            companyID: companyID,
            walletID: walletID
        })
    }


    private calculateCarbonCredit(distance: any, carbonSaved: any) {
        return distance * carbonSaved
    }

    private calculateCarbonSaved(vehicleScore: any) {
        return TripService.DEFAULT_CARBON_SCORE - vehicleScore
    }

    public async getTripByUser(userID: any) {
        const user = await new UserService().getUserByID(userID)
        if (user === null) {
            return { error: "User not found", statusCode: 404 }
        }

        const wallet = await new WalletService().getWallet(user.walletID)
        if (wallet === null) {
            return { error: "Wallet not found", statusCode: 404 }
        }

        const tripList = await Database.trip.findAll({ where: { walletID: wallet.id } })
        if (tripList === null) {
            return { error: "No trip founded", statusCode: 404 }
        } else {
            return tripList
        }

    }

    public async getTripByCompany(companyID: any) {
        const company = await new CompanyService().getCompanyByID(companyID)
        if (company === null) {
            return { error: "User not found", statusCode: 404 }
        }

        const tripList = await Database.trip.findAll({ where: { companyID: company.id } })
        if (tripList === null) {
            return { error: "No trip founded", statusCode: 404 }
        } else {
            return tripList
        }
    }
}
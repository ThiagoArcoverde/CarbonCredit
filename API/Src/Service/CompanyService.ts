import { Database } from "../Database/Database";
import Crypto from 'crypto'

export class CompanyService {

    public async addCompany(name: string) {
        const hash = Crypto.createHash('sha256').update(Date.now().toString()).digest('hex')

        const newCompany = await Database.company.create({
            name: name,
            tripsRequested: 0,
            accessKey: hash
        })
        return newCompany
    }

    public async getCompanyByKey(key: any) {
        const company = await Database.company.findOne({ where: { accessKey: key } })
        return company
    }

    public async getCompanyByID(id: any) {
        const company = await Database.company.findByPk(id)
        return company
    }

    public async updateCompanyKey(oldKey: any) {
        const company = await this.getCompanyByKey(oldKey)
        if (company === null) {
            return null
        } else {
            let newKey = Crypto.createHash('sha256').update(Date.now().toString()).digest('hex')
            company.accessKey = newKey
            await company.save()
            return company
        }
    }

    public async deleteCompanyByKey(key: any) {
        const company = await this.getCompanyByKey(key)
        if (company === null) {
            return 404
        } else {
            await company.destroy()
            return company
        }
    }

    public async deleteCompanyByID(id: any) {
        const company = await this.getCompanyByID(id)
        if (company === null) {
            return 404
        } else {
            await company.destroy()
            return company
        }
    }

}
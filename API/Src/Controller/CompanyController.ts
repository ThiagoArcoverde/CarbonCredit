import { Request, Response } from 'express'
import { CompanyService } from '../Service/CompanyService'

class CompanyController {

    public async addCompany(req: Request, res: Response) {
        try {
            if (req.body == undefined) {
                res.sendStatus(400)
            } else {
                const name = req.body.name
                if (!isNaN(name) || name == undefined) {
                    res.sendStatus(400)
                } else {
                    const company = await new CompanyService().addCompany(name)
                    res.statusCode = 201
                    res.send(company)
                }
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async getCompanyByKey(req: Request, res: Response) {
        try {
            const key = req.params.accessKey
            if (key != undefined) {
                const company = await new CompanyService().getCompanyByKey(key)
                if (company === null) {
                    res.sendStatus(404)
                } else {
                    res.statusCode = 200
                    res.send(company)
                }
            } else {
                res.send(400)
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async getCompanyByID(req: Request, res: Response) {
        try {
            const id = req.params.id
            if (id != undefined) {
                const company = await new CompanyService().getCompanyByID(id)
                if (company === null) {
                    res.sendStatus(404)
                } else {
                    res.statusCode = 200
                    res.send(company)
                }
            } else {
                res.send(400)
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async updateCompanyKey(req: Request, res: Response) {
        try {
            const oldKey = req.body.accessKey
            if (oldKey != undefined) {
                const updatedCompany = await new CompanyService().updateCompanyKey(oldKey)
                if (updatedCompany === null) {
                    res.sendStatus(404)
                } else {
                    res.statusCode = 200
                    res.send(updatedCompany)
                }
            } else {
                res.sendStatus(400)
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async deleteCompanyByKey(req: Request, res: Response) {
        try {
            const key = req.body.accessKey
            if(key != undefined){
                const deletedCompany = await new CompanyService().deleteCompanyByKey(key)
                if(deletedCompany === null){
                    res.sendStatus(404)
                }else{
                    res.statusCode = 200
                    res.send(deletedCompany)
                }
            }else{
                res.sendStatus(400)
            }
        } catch (error) {
            res.statusCode = 500
            res.send(error)
        }
    }

    public async deleteCompanyByID(req: Request, res: Response) {
        try {
            const id = req.body.id
            if(id != undefined){
                const deletedCompany = await new CompanyService().deleteCompanyByID(id)
                console.log(deletedCompany)
                if(deletedCompany === null){
                    res.sendStatus(404)
                }else{
                    // res.statusCode = 200
                    res.status(200).send(deletedCompany)
                }
            }else{
                res.sendStatus(400)
            }
        } catch (error) {
            console.log(error)
            res.statusCode = 500
            res.send(error)
        }
    }

}

export default new CompanyController()
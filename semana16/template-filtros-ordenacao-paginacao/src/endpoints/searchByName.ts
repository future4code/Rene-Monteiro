import { Request, Response} from 'express'
import { filterName } from '../data/filterName'


export const searchByName = async(req:Request, res: Response) => {
    try {
        const name = (req.query.name as string).toLowerCase()

        if(!name ) {
            throw new Error("Insira um nome")
        }

        const filterNames = await filterName(name)
        
        if(!filterNames.length) {
            res.statusCode = 404
            throw new Error("Array vazio")
        }
        
        res.status(200).send(filterNames)

        
    } catch (error) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
    }

    
}

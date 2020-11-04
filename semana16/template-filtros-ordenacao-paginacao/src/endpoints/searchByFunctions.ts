import {Response, Request} from 'express'
import { filterFunctions } from '../data/filterFunctions'



export const searchByFunctions = async(req: Request, res: Response) => {
    try {
        const func = (req.params.type as string).toLowerCase()

        if(!func ) {
            throw new Error("Insira um nome")
        }

        const result = await filterFunctions(func)
        
        if(!result.length){
            res.statusCode = 404
            throw new Error("Array vazio")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sql.Message
        })
    }


}
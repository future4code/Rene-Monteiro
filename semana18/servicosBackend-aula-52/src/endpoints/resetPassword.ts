import {Request, Response} from 'express'
import { selectUserByEmail } from '../data/selectUserByEmail'
import { updatePassword } from '../data/updatePassword'
import {hash} from '../services/hashManage'

export  const resetPassword = async (req:Request, res: Response) =>{
    try {
        let errorCode = 400
        const email = req.body.email
        if (!email){
            throw new Error("Insira um email")
        }
      
        const user = await selectUserByEmail(email)
        
        if (!user){
            errorCode = 404
            throw new Error("Insira um email")
        }

        const password = "bananinha"
        const hashedPassword = await hash(password)

        await updatePassword(user.id, hashedPassword)

        res.send({message:"senha atualizada com sucesso"})
    } catch (error) {
        res.send(error).send({message:"erro"})
        
    }
}
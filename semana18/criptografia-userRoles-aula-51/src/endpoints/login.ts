import {Request, Response} from 'express'
import { selectUserByEmail, User } from '../data/selectUserByEmail'
import { generateToken } from '../services/authenticator'

export default async function login(req:Request, res:Response): Promise<void> {
    try {
        const {email,senha}=req.body
        let message = "usuário logado"
        if(!email || !senha){
            res.statusCode = 406
            message = "email e senha obrigatórios"
            throw new Error(message)
        }

        const user:User = await selectUserByEmail(email)

        if(!user){
            res.statusCode = 404
            message = 'usuario não encontrado'
            throw new Error(message)
        }

        if(user.senha !== senha){
            res.statusCode = 401
            message = "não autorizado"
            throw new Error(message)
        }

        const token:string = generateToken({id: user.id})

        res.send({message, token})

    } catch (error) {
        
        let {message} = error
        if(message === "Cannot read property 'id' of undefined"){
            message = "Usuário não encontrado ou senha incorreta"
            res.statusCode = 404
        }
        res.send({message})
    }
    
}
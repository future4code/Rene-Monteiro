import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { generatedId } from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.senha
        ) {
          throw new Error('Preencha os campos "name","nickname", "email" e "senha"')
        }

        const id: string = generatedId()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            req.body.senha
        )

        const token : string  = generateToken({id})

        res.status(201).send({message: "Usuário criado", token })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
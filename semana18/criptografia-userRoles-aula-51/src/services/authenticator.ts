import * as jwt from 'jsonwebtoken'


export type AuthenticationData = {
    id: string
}

//recebe um objeto como parametro e retorna uma string
export const generateToken = (payload:AuthenticationData): string => {
    return jwt.sign(payload, process.env.JWT_KEY as string, { expiresIn: "24h"})

}
//recebe a string e devolve o objeto
export const getTokenData = (token: string): AuthenticationData =>{
    return jwt.verify(token,process.env.JWT_KEY as string) as AuthenticationData
    

}
import * as bcrypt from 'bcryptjs'

/*
export const hash = async (senha:string):Promise<string> =>{
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    return   await bcrypt.hash(senha, salt)
}*/

export const hash = async (senha:string):Promise<string> =>{
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const cypherText = await bcrypt.hash(senha, salt)
    return cypherText
}


export const compare = async (senha: string, cypherText: string):Promise<boolean> => {

    
    return bcrypt.compare(senha,cypherText) // como retorna a Promise, não precisa do await
}


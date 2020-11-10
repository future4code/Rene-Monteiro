import {connection} from '..'

export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    senha: string
}

export async function selectUserByEmail (email : string): Promise<User> {
    
    try {
        const result =  await connection("to_do_list_users")
        .select("*")
        .where({email})
      
       
       /*const result = await connection.raw(`
       SELECT * FROM to_do_list_users
       WHERE '${email}';
       `)*/
       
       return {
            id: result[0].id,
            name: result[0].name,
            nickname: result[0].nickname,
            email: result[0].email,
            senha: result[0].senha

        }
        
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
      
}
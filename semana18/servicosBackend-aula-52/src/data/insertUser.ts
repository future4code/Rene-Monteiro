import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    senha: string,
    role: user_roles
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        senha,
        role
    }).into('to_do_list_users')
}

export enum user_roles {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN',
}
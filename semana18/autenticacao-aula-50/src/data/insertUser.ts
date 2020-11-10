import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    senha: string
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        senha
    }).into('to_do_list_users')
}
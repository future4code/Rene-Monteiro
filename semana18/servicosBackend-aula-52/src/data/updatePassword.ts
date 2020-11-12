import {connection} from '../index'

export const updatePassword =async (id:string, newPassword:string) => {
    await connection.raw(`
    update to_do_list_users
    set senha = "${newPassword}" 
    where id = "${id}"
    ;`)

}
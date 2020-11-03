import express, { Express, Request, Response } from "express"
import cors from "cors"
import { request } from "http"

const app : Express = express()

app.use(express.json())
app.use(cors())


type usuario = {
    id: number,
    nome:string,     
    CPF:number,     
    dataNascimento:string,
    saldo: number
    
}


const listaUsuarios : usuario[] = []

app.get("/users", (req : Request, res: Response): void=>{
    try{
        res.status(200).send(listaUsuarios)
    }catch{
        res.status(400).send({
            message:"error searching for users"
        })
    }
})

app.post("/users", (req : Request, res: Response): void=>{
    
    try{
        const {id, nome, CPF, dataNascimento,saldo} = req.body
        const users : usuario = {
            id, 
            nome, 
            CPF, 
            dataNascimento,
            saldo
        }

        const semBarra = users.dataNascimento.split("/")
        const juntar = semBarra.join('')
       
        if (juntar.length !== 8){
            throw new Error("Insira 8 numeros")
        }
       

        listaUsuarios.push(users)
        res.status(200).send("user created")
    }catch{
        res.status(400).send({
            message:"error searching for users"
        })
    }
})


app.listen(3003, ()=>{
    console.log("Servidor rodando!")
})
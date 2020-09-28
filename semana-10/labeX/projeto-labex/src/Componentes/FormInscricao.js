import React from 'react'
import {FormControl, FormLabel, Input, Select, Stack} from '@chakra-ui/core'
import styled from 'styled-components'
import PostData from '../Data/ListaDePaises.json'

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:10vh;
`


export default function FormInscricao(){
    return(
        <Container>
            <h2> Inscreva-se aqui!</h2>
            <FormControl isRequired>
                <FormLabel htmlFor="fname">Nome</FormLabel>
                <Input id="fname" placeholder="Nome completo" />
                
                <FormLabel htmlFor="fname">Idade</FormLabel>
                <Input type = 'number' min='18' id="fname" placeholder="Qual sua idade?" />
                
                <FormLabel htmlFor="fname">Descrição</FormLabel>
                <Input type= 'text'id="fname" placeholder="Data" />
                
                <FormLabel htmlFor="fname">Profissão</FormLabel>
                <Input id="fname" placeholder="First name" />
                
                <FormLabel htmlFor="fname">País</FormLabel>
                <Input id="fname" placeholder="First name" />
                
                <FormLabel htmlFor="fname">TripId</FormLabel>
                <Input  id="fname" placeholder="First name" />
                
                <FormLabel htmlFor="fname">País</FormLabel>
                <Select id ='fname'placeholder="Brasil">
                    {PostData.map((pais)=>{
                        return(<option key={pais.ordem} value={pais.nome}>{pais.ordem}: {pais.nome}</option>)
                    })}
                </Select>
            </FormControl>
        </Container>
    )
}
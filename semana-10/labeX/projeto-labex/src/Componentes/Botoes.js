import React from 'react'
import { Button, ButtonGroup } from "@chakra-ui/core";
import styled from 'styled-components'



const Container =styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items: center;
height:80vh;

`
const Bordas = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
border: solid 1px black;
height:30vh;
width: 20vw;
border-radius: 30px;


`

export default function Botoes(){

    return(
        <Container>
            <Bordas>
            <h2>Formulário de Inscrição</h2>
            <ButtonGroup spacing={4}>
            <Button variantColor="teal" variant="outline">
                Inscrição
            </Button>
            </ButtonGroup>
            </Bordas>
            <Bordas>
            <h2>Fazer Login</h2>
            <ButtonGroup spacing={4}>
            <Button variantColor="teal" variant="outline">
                Login
            </Button>
            </ButtonGroup>
            </Bordas>
        </Container>

    )
}
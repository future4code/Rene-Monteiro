import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  border: 1px solid black;
  border-radius: 5px;
  width: 28vw;
  height: 90vh;
  margin-top: 30px;
`;
const Cabecalho = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 10%;
`;
const Titulo = styled.h2``;
const Button = styled.button`
  margin-top: 15px;
  height: 30px;
`;
const Hr = styled.div`
background-color:grey;
width:100%;
height:1px;
`
const Perfil = styled.div`
display:flex;
align-items:center;
background-color: grey;
height: 10vh;
`
const Imagem = styled.img`
width: 20%;
height: 90%;

border-radius:50px;
`

function App(props) {
  return (
    <Container>
      <Box>
        <Cabecalho>
          <Button onClick={props.mudarPagina}>Voltar</Button>
          <Titulo>AstroMacht</Titulo>
        </Cabecalho>
        <Hr></Hr>
        <Perfil>
            <Imagem src={"https://picsum.photos/200"}/>
            <p>Imagem e nome</p>
        </Perfil>
      </Box>
    </Container>
  );
}

export default App;

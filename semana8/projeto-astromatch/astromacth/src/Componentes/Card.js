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
padding: 10px;

`
const Botoes = styled.div`
display:flex;
flex-direction: row;
justify-content:space-around;
width: 100%;
`
const Imagem = styled.img`
width: 100%;
height: 50vh;
`


function App(props) {

  const [perfil,setPerfil]= useState([])

  useEffect(()=>{
    escolherPerfil()
  },[])
  
  const escolherPerfil = () =>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rene/person")
    .then(response =>{
     setPerfil(response.data.profile)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  
  return (
    <Container>
     
      <Box>
        <Cabecalho>
          <Titulo>AstroMatch</Titulo>
          <Button onClick={props.mudarPagina}>Lista de Matches</Button>
        </Cabecalho>
        <Hr></Hr>
        <Perfil>
       <div key ={perfil.id}>
         <Imagem src={perfil.photo}/>
        <p>{perfil.name}, {perfil.age}</p>
        <p>{perfil.bio}</p>

       </div>
        </Perfil>
        <Botoes>
            <Button onClick={()=> escolherPerfil(perfil.id)}>proximo</Button>
            <Button>Adicionar</Button>
        </Botoes>
      </Box>
    </Container>
  );
}

export default App;

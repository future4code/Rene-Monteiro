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
flex-direction:column;
align-items:flex-start;
height: 10vh;
`
const Imagem = styled.img`
width: 30%;
height: 40%;
border-radius: 20px;
`

function App(props) {
  const [perfil,setPerfil]= useState([])

  useEffect(()=>{
    getMatches()
  }, [])

  const getMatches = () =>{
    axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rene/matches")
    .then(response=>{
      setPerfil(response.data.matches)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  return (
    <Container>
      {getMatches()}
      <Box>
        <Cabecalho>
          <Button onClick={props.mudarPagina}>Voltar</Button>
          <Titulo>AstroMacht</Titulo>
        </Cabecalho>
        <Hr></Hr>
        <Perfil>
            {perfil.map((pessoa)=>{
              return(
                <div key = {pessoa.id}>
                  <Imagem src={pessoa.photo}/>
                 <p>{pessoa.name}, {pessoa.age}</p>
                  <p>{pessoa.bio}</p>
                </div>
              )
            })}
        </Perfil>
      </Box>
    </Container>
  );
}

export default App;

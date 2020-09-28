import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { GoTohome } from '../Router/GoToPages';




const ContainerPrincipal = styled.div`
background-color: ;
height:100vh;
`
const ContainerForm = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`
const Campos = styled.input`
height:20px;
width: 300px;
margin-bottom: 5px;
`
const ViagemPlaneta = styled.select`
height:20px;
width: 300px;
margin-bottom: 5px;
`


function Formulario() {
    const history = useHistory()
  return (
    <ContainerPrincipal>
      <button onClick={()=>{GoTohome(history)}}>Home</button>
      <ContainerForm>
      <h2>Formulário de Inscrição</h2>
      <form>
      <Campos type='text' placeholder='Nome'/><br/>
      <Campos type='number' placeholder='Idade'/><br/>
      <Campos type='text' placeholder='Escreva aqui'/><br/>
      <Campos type='text' placeholder='Profissão'/><br/>
      <ViagemPlaneta>
        <option  width='100%'>         
         nome da Viagem - Planeta
        </option>
        </ViagemPlaneta><br/>
      <Campos type='text' placeholder='Viagem'/><br/>
      </form>
      </ContainerForm>


    </ContainerPrincipal>
  );
}

export default Formulario;

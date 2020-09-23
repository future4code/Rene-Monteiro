import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'


const Container = styled.div`
display:flex;
`

const BoxDay = styled.div`
display:flex;
flex:1;
flex-direction:column;
align-items:center;
border: 1px solid black;
height:85vh;
margin: 0px 3px 0px 3px;
`


export default function Box() {
  const [tasks, SetTasks] = useState([])

  useEffect(()=>{
    getTasks()
  },[])

  const getTasks = ()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-rene")
    .then((response)=>{
      SetTasks(response.data)
     
    })
    .catch((error)=>{
      console.log(error)
    })
  }




  return (
    <Container>
  
      <BoxDay>
     <h2>Domingo</h2> 
     
      </BoxDay>
      <BoxDay>
      <h2>Segunda</h2>
      </BoxDay>
      <BoxDay>
      <h2>Terça</h2>
      </BoxDay>
      <BoxDay>
      <h2>Quarta</h2>
      </BoxDay>
      <BoxDay>
      <h2>Quinta</h2>
      </BoxDay>
      <BoxDay>
      <h2>Sexta</h2>
      </BoxDay>  
      <BoxDay>
      <h2>Sábado</h2>
      </BoxDay>
    </Container>
  );
}



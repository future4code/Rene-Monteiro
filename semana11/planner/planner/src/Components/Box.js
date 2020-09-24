import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios"


const Container = styled.div`
display:flex;
`

const BoxDay = styled.div`
display:flex;
flex:1;
flex-direction:column;
align-items:center;
border: 1px solid black;
border-radius:20px;
height:85vh;
margin: 0px 3px 0px 3px;
overflow:auto;
`
export default function Box() {
  const [tasks, SetTasks] = useState([])

  useEffect(()=>{
    getTasks()
  },[tasks])

  const getTasks = ()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-rene")
    .then((response)=>{
      SetTasks(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const deleteText=(id)=>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-rene/${id}`)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const ArrayDomingo = tasks.filter((day)=>{
    return day.day === "Domingo" 
  })

  const ArraySegunda = tasks.filter((day)=>{
    return day.day === "Segunda" 
  })
  const ArrayTerca = tasks.filter((day)=>{
    return day.day === "Terça" 
  })
  const ArrayQuarta = tasks.filter((day)=>{
    return day.day === "Quarta" 
  })
  const ArrayQuinta = tasks.filter((day)=>{
    return day.day === "Quinta" 
  })
  const ArraySexta = tasks.filter((day)=>{
    return day.day === "Sexta" 
  })

  const ArraySabado= tasks.filter((day)=>{
    return day.day === "Sábado" 
  })
  
  const semAtividades = `Sem atividades`
  return (
    <Container>
      <BoxDay>
     <h2>Domingo</h2> 
     <h3>{ArrayDomingo.length === 0
            ? `${semAtividades}`
            : `Total de Atividades:${ArrayDomingo.length}`}</h3>
      {ArrayDomingo.map((atividade, indice)=>{
        return <p onClick={()=> deleteText(atividade.id)} key={atividade.id}>{indice+1}: { atividade.text || `Sem atividade`} 
        
        </p>
      })}
      </BoxDay>
      <BoxDay>
      <h2>Segunda</h2>
      <h3>{ArraySegunda.length === 0
            ? `${semAtividades}`
            : `Total de Atividades:${ArraySegunda.length}`}</h3>
      {ArraySegunda.map((atividade, indice)=>{
        return <p onClick={()=> deleteText(atividade.id)} key={atividade.id}>{indice+1}: { atividade.text || `${semAtividades}`} 
        </p>
      })}
      </BoxDay>
      <BoxDay>
     <h2>Terça</h2> 
     <h3>{ArrayTerca.length === 0
            ? `${semAtividades}`
            : `Total de Atividades:${ArrayTerca.length}`}</h3>
      {ArrayTerca.map((atividade, indice)=>{
        return <p onClick={()=> deleteText(atividade.id)} key={atividade.id}>{indice+1}: { atividade.text || `${semAtividades}`} 
       
        </p>
      })}
      </BoxDay>
      <BoxDay>
     <h2>Quarta</h2> 
     <h3>{ArrayQuarta.length === 0
            ? `${semAtividades}`
            : `Total de Atividades:${ArrayQuarta.length}`}</h3>
      {ArrayQuarta.map((atividade, indice)=>{
        return <p onClick={()=> deleteText(atividade.id)} key={atividade.id}>{indice+1}: { atividade.text || `${semAtividades}`} 
        
        </p>
      })}
      </BoxDay>
      <BoxDay>
     <h2>Quinta</h2> 
     <h3>{ArrayQuinta.length === 0
            ? `${semAtividades}`
            : `Total de Atividades:${ArrayQuinta.length}`}</h3>
      {ArrayQuinta.map((atividade, indice)=>{
        return <p onClick={()=> deleteText(atividade.id)} key={atividade.id}>{indice+1}: { atividade.text || `${semAtividades}`} 
        
        </p>
      })}
      </BoxDay>
      <BoxDay>
     <h2>Sexta</h2> 
     <h3>{ArraySexta.length === 0
            ? `${semAtividades}`
            : `Total de Atividades:${ArraySexta.length}`}</h3>
      {ArraySexta.map((atividade, indice)=>{
        return <p onClick={()=> deleteText(atividade.id)} key={atividade.id}>{indice+1}: { atividade.text || `${semAtividades}`} 
       
        </p>
      })}
      </BoxDay>
      <BoxDay>
      <h2>Sábado</h2>
      <h3>{ArraySabado.length === 0
            ? `${semAtividades}`
            : `Total de Atividades:${ArraySabado.length}`}</h3>
      {ArraySabado.map((atividade, indice)=>{
        return <p onClick={()=> deleteText(atividade.id)} key={atividade.id}> {indice+1}: { atividade.text || `${semAtividades}`} 
        </p>
      })}
      </BoxDay>
      
    </Container>
  );
}



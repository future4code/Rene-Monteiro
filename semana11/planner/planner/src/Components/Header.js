import React, {useState,useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
height: 10vh;
`

const InputButtons = styled.div`
display:flex;
`

export default function Header() {
    const [inputValue, SetInputValue] = useState('')
    const [dayValue, SetDayValue] = useState('')

    const DaysWeek = ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

    {/*useEffect(()=>{
        CreateTask()
    },[])*/}

    const OnChangeInputValue = (event)=>{
        SetInputValue(event.target.value)
    }

    const OnChangeDayValue = (event)=>{
        SetDayValue(event.target.value)
    }


    const CreateTask = ()=>{
        const body = {
            text: inputValue,
            day: dayValue
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-rene",body)
        .then((response)=>{
            
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }

    

  return (
      <Container>
        <InputButtons >
        <input value={inputValue} onChange={OnChangeInputValue} placeholder='Text'/>
        <select onChange={OnChangeDayValue} value={dayValue}>
            
            {DaysWeek.map((days)=>{
                return <option onChange={OnChangeDayValue} value={days} key={days}>{days}</option>
                })}
        </select>
        <button  onClick={CreateTask}>Criar Tarefas</button>
        </InputButtons>
    </Container>
  );
}



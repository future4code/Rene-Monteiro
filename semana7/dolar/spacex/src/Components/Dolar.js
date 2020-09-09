import React from 'react';
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin: 300px;
font-size: 80px
`

export default class App extends React.Component {
    state = {
        dolar: [],
        euro: [],
    }

    componentDidMount = () =>{
        this.cotacaoMoedas()
    }
   
  
  cotacaoMoedas = () => {
      axios.get("https://economia.awesomeapi.com.br/json/all/USD-BRL,EUR-BRL")
        .then((resposta)=>{
            console.log(resposta.data)
            this.setState({dolar: resposta.data.USD.ask})
            this.setState({euro: resposta.data.EUR.ask})
        }).catch((erro)=>{
            console.log(erro)
        })

  }
  
    render(){
    return (
      <Container>
          <p> Dólar: {this.state.dolar}</p>
          <p> Euro: {this.state.euro}</p>
      </Container>
    );
  }
}



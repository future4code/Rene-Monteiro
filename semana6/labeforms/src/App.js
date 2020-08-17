import React from 'react';
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"
import styled from "styled-components"



const Container = styled.div`
display:flex;
flex-direction: column;
justify-items: center;
align-items: center;


`
const Button = styled.button`
`

export default class labeform  extends  React.Component {
  state = {
    etapa:1,
  }
  renderizaEtapa =() => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
      default:
        return <div></div>
    }
  }
  proximaEtapa = () =>{
    const valor = this.state.etapa +1
    this.setState({etapa: valor})

  }

  render() {

    return (
      <Container >
        {this.renderizaEtapa()}
        <Button onClick = {this.proximaEtapa}>Próxima Etapa</Button>
      </Container>
    );



  }
}



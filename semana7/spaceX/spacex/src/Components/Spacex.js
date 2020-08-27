import React from "react";
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
display:flex;
flex-direction:column;
margin: 80px
`
const Titulo = styled.h1`
display:flex;
justify-content:center
`

export default class extends React.Component {
  state = {
    missao: []
  };

  getAllMissions = () => {
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then((response) => {
        console.log(response);
        this.setState({ missao: response.data });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  componentDidMount = () => {
    this.getAllMissions();
  };

  render() {
    return (
      <Container >
        <Titulo>Meu Titulo</Titulo>
          {this.state.missao.map((filtro) => {
            return (
              <div>
                <h2 key={filtro.mission_id}>Nome da Missão: {filtro.mission_name}</h2>
                <a href={filtro.wikipedia}>Link: {filtro.wikipedia}</a>
                <p>Descrição da Missão: {filtro.description}</p>
                <p>
                  {filtro.manufacturers.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </p>
                <hr />
              </div>
            );
          })}
      </Container>
    );
  }
}

import React from "react";
import styled from "styled-components";
import axios from "axios";

const Containers = styled.div`
  display: flex;
flex-direction:column
`;


export default class App extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount = () =>{
      this.acessarPlay()
  }

  acessarPlay = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "rene-monteiro-jackson",
          },
        }
      )
      .then((resposta) => {
        console.log(resposta)
        this.setState({ playlists: resposta.data.result.list});
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  render() {
    return <Containers>
        <h2>Todas as PlayLists</h2>
        {this.state.playlists.map((lista)=>{
        return <p >{lista.name}</p>;
        })}
        
        </Containers>;
  }
}

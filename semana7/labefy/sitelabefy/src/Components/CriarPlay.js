import React from "react";
import axios from "axios";
import styled from "styled-components"


const Container = styled.div`
display:flex;
margin-top:50px;

`
export default class App extends React.Component {
  state = {
      
      inputPlay:'',
   
  };
  onChangePlay = (event) =>{
    this.setState({inputPlay: event.target.value})
  }
  
  
  criarPlay = () => {
      const body = {
          name: this.state.inputPlay
    }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,

        {
            headers: {
                Authorization: "rene-monteiro-jackson"
            }
        })
        .then((resposta)=>{
            this.setState({inputPlay:''})
           
        })
        .catch((erro)=>{
            console.log(erro)
        })
  };

  render() {
    return (
    <Container>
        <input value={this.state.inputPlay} onChange={this.onChangePlay} placeholder='nome da PlayList'></input>
        <button onClick={this.criarPlay}>Criar Playlist</button>
    </Container>
    )
  }
}

import React from "react";
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
display:flex;
flex-direction:column;
`

export default class App extends React.Component {
  state = {
      name:'',
      artist:'',
      url:'',
      
  };

onChangeName = (event) =>{
    this.setState({name:event.target.value})
}


onChangeArtist = (event) =>{
    this.setState({artist:event.target.value})
}

 onChangeUrl = (event) =>{
    this.setState({url:event.target.value})
 }
  
  AdicionarMusica = () => {
      
      const body = {
          name:this.state.name,
          artist:this.state.artist,
          url:this.state.url
      }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/e8b1518a-658e-4f61-9c74-4a62279c7617/tracks",body,
      {header: {
          Authorization: "rene-monteiro-jackson"
      }})
      .then((resposta) =>{
        console.log(resposta)
      
      })
      .catch((erro)=>{
        console.log(erro)
      })
  };

  render() {
    return (
    <Container>
        <h2>Adicionar Musicas</h2>
        <form action="#">
        <input value={this.state.name} onChange={this.onChangeName} placeholder='nome' required/>
        <input value={this.state.artist} onChange={this.onChangeArtist} placeholder='artist' required/>
        <input value={this.state.url} onChange={this.onChangeUrl} placeholder='url' required/>
        <button onClick={this.AdicionarMusica}>Adicionar Musica</button>
        </form>
       
    </Container>
    )
  }
}


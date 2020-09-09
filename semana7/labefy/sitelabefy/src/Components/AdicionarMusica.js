import React from "react";
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
display:flex;
flex-direction:column;
`

export default class AdicionarMusica extends React.Component {
  state = {
      nome:'',
      artista:'',
      link:'',
      
  };

onChangeName = (event) =>{
    this.setState({nome:event.target.value})
}


onChangeArtist = (event) =>{
    this.setState({artista:event.target.value})
}

 onChangeUrl = (event) =>{
    this.setState({link:event.target.value})
 }
  
  AdicionarMusica = () => {
      
      const body = {
          name:this.state.nome,
          artist:this.state.artista,
          url:this.state.link
      }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/6a7ad324-714e-4b72-8d8f-5f35a5d562f6/tracks", body,
      {headers: {
          Authorization: "rene-monteiro-jackson",
      }})
      .then((resposta) =>{
        console.log(resposta)
        this.setState({nome:'', artista:'', link:''})
      
      })
      .catch((erro)=>{
        console.log(erro)
      })
  };

  render() {
    return (
    <Container>
        <h2>Adicionar Musicas</h2>
        <form action='#'>
          <input value={this.state.nome} onChange={this.onChangeName} placeholder='nome' />
          <input value={this.state.artista} onChange={this.onChangeArtist} placeholder='artist' />
          <input value={this.state.link} onChange={this.onChangeUrl} placeholder='link' />
          <button onClick={this.AdicionarMusica}>Adicionar Musica</button>

        </form>
        
    </Container>
    )
  }
}

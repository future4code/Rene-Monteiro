import React from "react"
import axios from "axios"
import styled from "styled-components"

const Container = styled.div`



`

export default class MusicasPlay extends React.Component{
    state ={
        album:[]

    }
    componentDidMount = () =>{
        this.MusicasPlay()
    }

    MusicasPlay = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/6a7ad324-714e-4b72-8d8f-5f35a5d562f6/tracks", 
        {
            headers: {
                Authorization: "rene-monteiro-jackson"
            }
        })
        .then((resposta)=>{
            console.log(resposta)
            this.setState({album: resposta.data.result.tracks})
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }
    render() {
        return(
            <div>
                <h2>Musicas Da playlists</h2>
                {this.state.album.map((lista)=>{
                    return(
                        <Container key ={lista.id}>
                            <p >{lista.name} {lista.artist}</p>
                            <video width='320px' height='240px' controls >
                            <source src={lista.url} type='audio/mp4'/>    
                            </video>

                        </Container>


                    ) 
                })}
            </div>
        )
    }
}


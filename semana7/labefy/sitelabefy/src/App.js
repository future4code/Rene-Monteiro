import React from "react";
import styled from "styled-components";
import Playlists from "./Components/Playlists.js";
import CriarPlay from "./Components/CriarPlay.js"
import AdicionarMusica from "./Components/AdicionarMusica.js"
import DeletarPlay from "./Components/DeletarPlay.js"
import MusicasPlay from "./Components/MusicasPlay.js"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:300px
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <CriarPlay/>
        <Playlists/>
        <MusicasPlay/>
        <AdicionarMusica/>
        <DeletarPlay/>
      </Container>
    );
  }
}

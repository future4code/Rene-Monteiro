import React from "react";
import PaginaDeRegistro from "./Components/PaginaDeRegistro.js";
import Login from "./Components/Login.js";
import styled from "styled-components";



export default class App extends React.Component {
  state = {
    pagina: 0,
  };

  paginaAtual = () => {
    switch (this.state.pagina) {
      case 0:
        return <Login />;
      case 1:
        return <PaginaDeRegistro />;
    }
  };
  apertarBotao = () => {
    const n = this.state.pagina;
    if (n === 0) {
      this.setState({ pagina: 1 });
    } else {
      this.setState({ pagina: 0 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.apertarBotao}>Botão</button>
        {this.paginaAtual()}
      </div>
    );
  }
}

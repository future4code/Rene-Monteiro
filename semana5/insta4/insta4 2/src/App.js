import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario : "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario : "Darvas",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario : "Severo",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      },
    ],

    
  };
  render() {
    const novoPost = this.state.post.map((publi) => {
      return(
        <div>
          <p>{publi.nomeUsuario}</p>  
          <img src = {publi.fotoUsuario}/>
          <img src = {publi.fotoPost}/>
        </div>
      )

    })
    return (
      <div className={'app-container'}>
        {novoPost}
         <Post
          nomeUsuario={'Darvas'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
         <Post
          nomeUsuario={'Severo'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </div>
    );
  }
}

export default App;

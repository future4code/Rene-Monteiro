import React from 'react';
import Etapa3 from "./Etapa3"


export default class etapa2  extends  React.Component {

  render() {

    return (
        <div>
            <h2>Etapa 2 - Informações do Ensino Superior </h2>
            <form action='#'> 
                <label for="curso">5. Qual o curso?</label><br/>
                <input type='text'name='curso' id='curso'></input><br/>
               
                <label for = "unidade">6. Qual a unidade de ensino?</label><br/>
                <input type='text'name='unidade' id='unidade'></input><br/>
               
            </form>
        
        </div>
    );



  }
}



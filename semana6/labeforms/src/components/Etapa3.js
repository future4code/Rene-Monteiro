import React from 'react';
import Final from "./Final"

export default class etapa3  extends  React.Component {

  render() {

    return (
        <div>
        <h2>Etapa 3 - Informações gerais de ensino </h2>
            <form action='#'> 
                <label for="graduacao">5. Por que voce não terminou um curso de graduação?</label><br/>
                <input type='text'name='curso' id='graduacao'></input><br/>
               
                <label for = "complementar">6. Você fez algum curso complementar?</label><br/>
                <select type='text'name='unidade' id='complementar'><br/>
                    <option value="tecnico">Curso Técnico</option>
                    <option value="ingles">Curso de Inglês</option>
                    <option value="naoFez">Não fiz curso complementar</option>

                </select>
               
            </form>
    </div>
    );



  }
}



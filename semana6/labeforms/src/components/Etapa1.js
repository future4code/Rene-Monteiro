import React from 'react';
import Etapa2 from "./Etapa2"


export default class etapa1  extends  React.Component {

  render() {

    return (
        <div>
        
            <h2>Etapa 1 - Dados Gerais</h2>
            <form action='#'> 

                <label for="nome">1. Qual seu nome?</label><br/>
                <input type='text'name='' id='nome'></input><br/>
                
                <label for = "idade">2. Qual sua idade?</label><br/>
                <input type='text'vname=''id='idade'></input><br/>
                
                <label for = "email">3. Qual seu e-mail</label><br/>
                <input type='text'name='' id='email'></input><br/>
                
                <label for = "escolaridade">4. Qual sua escolaridade?</label><br/>
                <select name='' id='escolaridade'>
                    <option value="medioIncompleto">Ensino Médio Incompleto</option>
                    <option value="medioCompleto">Ensino Médio Completo</option>
                    <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                    <option value="supetiorCompleto">Ensino Superior Completo</option>
                </select>
                
                
            </form>
            
        </div>
    );



  }
}



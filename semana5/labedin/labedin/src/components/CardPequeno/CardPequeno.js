import React from 'react';
import './CardPequeno.css';


function CardPequeno(props){
    return (
        <div className = "smallCard-container">
            <img src ={props.imagemCaixaEmail} />
            <img src = {props.imagemLocalizacao}/>
            <p>{props.titulo}</p>
            <p>{props.localizacao}</p>
            <p>{props.email}</p>
            <p>{props.endereco}</p>

        </div>
    )
}

export default CardPequeno;
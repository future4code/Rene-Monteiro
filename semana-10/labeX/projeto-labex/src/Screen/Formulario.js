import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoTohome } from '../Router/GoToPages';



function Formulario() {
    const history = useHistory()
  return (
    <div>
      <p>Formulário</p>
      <button onClick={()=>{GoTohome(history)}}>Home</button>
    </div>
  );
}

export default Formulario;

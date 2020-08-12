import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './img/Foto.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {Foto} 
          nome="René" 
          descricao="Sou formado em administração trabalhei alguns anos no setor bancário e hoje estou em transição de carreira, em breve serei um Desenovlvedor Web Full Stack"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className = "smallCard-container">
        <CardPequeno
        imagemCaixaEmail = "https://img2.gratispng.com/20180712/azw/kisspng-email-address-email-box-customer-service-google-ac-email-5b47b8807ccd64.7009413115314269445112.jpg"
       titulo = "E-mail: "
       email = ' renemonteiro@hotmail.com.br'
       />      
      </div>
      <div className = "smallCard-container-2">
        <CardPequeno 
        imagemLocalizacao = "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-location-icon-png-image_956397.jpg"
       
        localizacao = "Endereço: "
        endereco = 'Rua Joao Fernandes vieira'
        />



      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Banco Bradesco" 
          descricao="Trabalhei como supervisor administrativo no Banco Bradesco por aproximadamente 8 anos. " 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Quem sabe após o curso da Labenu, a Nasa não vem me contratar? " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://imagens.canaltech.com.br/empresas/638.400.jpg" 
          texto="renemonteiro30" 
        />        

        <ImagemButton 
          imagem="https://imagens-revista-pro.vivadecora.com.br/uploads/2017/10/como-usar-o-linkedin-para-empresas.png" 
          texto="renemonteiro30" 
        />        
      </div>
    </div>
  );
}

export default App;

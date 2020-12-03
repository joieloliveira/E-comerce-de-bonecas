import "../../appCard.css";
import React from "react";
import { Jumbotron } from 'reactstrap';

function SobreEmpresa () {
  
    return(
      <div className="App">
          <Jumbotron fluid className="descr-top">
              <h2 className="text-center">Sobre Empresa</h2>
          </Jumbotron>    
      </div>
    )
}

export default SobreEmpresa;
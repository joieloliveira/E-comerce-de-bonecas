import "../../appCard.css";
import React from "react";
import { Jumbotron } from 'reactstrap';
import Cards from '../../components/cards/Cards';

function Main () {


  
  return(
    <div className="App">
        <Jumbotron fluid className="descr-top">
            <Cards />
        </Jumbotron>    
    </div>
  )
}

export default Main;


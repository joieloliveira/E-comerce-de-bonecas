import "../../appCard.css";

import React from "react";
import Card from './Card';
import { Col, Row } from 'reactstrap';
import Img from '../../img/img6/boneca6.jpg';

class Cards extends React.Component{

    render(){
      let rows = []
      for(let i=0; i<8; i++){
        rows.push(
            <Col sm="6" lg="3">
                <Card titulo="Bonecas de Pano">
                    <img src={Img} alt="Img" />
                </Card>
            </Col>
        )
      }
      return (
        <div>
            <Row>
                {rows} 
            </Row>
        </div>
      )
    }
  }

export default Cards;
                
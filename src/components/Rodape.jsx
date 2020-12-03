import React from 'react';

import { Container, Jumbotron } from 'reactstrap';

const Rodape = () => {
  
    return (
        <Jumbotron fluid className="rodape" dark expand="md">

            <style>
                {
                    `.rodape{
                        background-color: #000;
                        color: #fed136;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        margin-bottom: 0rem !important;
                    }`
                }
            </style>     

            <Container className="text-center">
                <h2 className="lead">Contato: joieloliveira@gmail.com</h2>
            </Container>
        </Jumbotron>
    );
};

export default Rodape;
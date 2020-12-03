import React from 'react';
import Menu from './components/Menu';
import Routes from './routes';
import Rodape from './components/Rodape';
import { Container } from 'reactstrap';
import Img from './img/bg/bg1.png';
import Img4 from './img/bg/bg6.jpg';

function App () {
    
    return (
        <div style={
            { backgroundImage: `url(${Img})`}}>
            <Container style={
                { backgroundImage: `url(${Img4})`}}>
                <Menu />
                <Routes />          
            </Container> 
            <Rodape />
        </div>    
    ); 
};

export default App;
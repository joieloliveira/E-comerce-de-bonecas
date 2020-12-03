import "./Card.css";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'reactstrap';

function Card (props) {
      
    //const cardStyle = {
        //backgroundColor: props.color || '#fca3cc',
        //borderColor: props.color || '#fca3cc',
    //}
    return (
        <div className="Card">
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
            <div className="preco">
                <h3>R$ 100,00</h3>
                <p>3x no cartão</p>
                <p>5% desconto no boleto</p>
            </div>
            <div className="social">
                <Button color="info">Comprar</Button>
                <a href="#"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />              
                </a>
            </div>
            
        </div>           
    );  
}
    
export default Card;

/*
export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }
    
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};
*/
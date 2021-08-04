import React, {useState} from 'react'
import Icon from "./Components/Icon"
// impport react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import react-strap
import { Container,Row,Col,Card,CardBody,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

const ticArray = new Array(9).fill("");
const App = ()=>{
    const [isCross, setIsScorss] = useState(true);
    const [winMessage, setWinMessage] = useState("");
    
    //reload the game
    const reload = ()=>{
        ticArray.fill("");
        setIsScorss(true);
        setWinMessage("");
    }

    //find the winner 
    const findWinner = ()=>{
        if(ticArray[0] === ticArray[1] && ticArray[1] === ticArray[2] && ticArray[0] != "" ){
            setWinMessage(`The winner is ${ticArray[0]}`)
        }
        else if(ticArray[3] === ticArray[4] && ticArray[4] === ticArray[5] && ticArray[3] != "" ){
            setWinMessage(`The winner is ${ticArray[3]}`)
        }
        else if(ticArray[6] === ticArray[7] && ticArray[7] === ticArray[8] && ticArray[6] != "" ){
            setWinMessage(`The winner is ${ticArray[6]}`)
        }
        else if(ticArray[0] === ticArray[3] && ticArray[3] === ticArray[6] && ticArray[0] != "" ){
            setWinMessage(`The winner is ${ticArray[0]}`)
        }
        else if(ticArray[1] === ticArray[4] && ticArray[4] === ticArray[7] && ticArray[1] != "" ){
            setWinMessage(`The winner is ${ticArray[1]}`)
        }
        else if(ticArray[2] === ticArray[5] && ticArray[5] === ticArray[8] && ticArray[2] != "" ){
            setWinMessage(`The winner is ${ticArray[2]}`)
        }
        else if(ticArray[0] === ticArray[4] && ticArray[4] === ticArray[8] && ticArray[0] != "" ){
            setWinMessage(`The winner is ${ticArray[0]}`)
        }
        else if(ticArray[2] === ticArray[4] && ticArray[4] === ticArray[6] && ticArray[2] != "" ){
            setWinMessage(`The winner is ${ticArray[2]}`)
        }
        else if(ticArray.indexOf('') == -1){
            setWinMessage(" Game is draw")
        }
        
    }
    
    // change the move
    const changeMove = (index)=>{
         if(winMessage){
             toast.warn("Game is already Over", {
                position: "top-right"
                });
         }
        if(ticArray[index] == ""){
            isCross? ticArray[index] = "cross" : ticArray[index] = "circle";
            setIsScorss(!isCross);
            findWinner()
        }
        else{
            toast.warn("This position is already taken");
        }
        }
    
    

    return(
        <Container className="p-5">
            <ToastContainer position="bottom-center"> </ToastContainer>
            <Row>
                <Col md={6} className="offset-md-3"> 
                     
                     {
                        winMessage ? 
                        (
                            <div>
                              <h1 className="text-center"> {winMessage} </h1>
                              <Button onClick={reload}> Reload </Button>
                            </div>
                        ):
                        (
                            <h1>
                                {isCross? "Cross's Turn": "Circle's Turn"}
                            </h1>
                            
                        )
                     }
                    <div className="grid"> 
                    {ticArray.map((value, index)=>(
                        <Card onClick={()=>changeMove(index)}> 
                          <CardBody className="block">
                            <Icon choice={ticArray[index]}/>
                          </CardBody>
                     </Card>
                     ))
                    }    
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default App
import { useEffect, useState } from "react";

function randomRoll ()  {return Math.floor(Math.random() * 3) ;}
    function rollAgain(rdm){
        switch(rdm){
            case 0:
                return "🍒";
            case 1:
                return "🍌​";
            case 2:
                return "🍇";
        }
    }

export default function Slots(){


    
    let [rdm1, setRdm1] = useState("🍒");
    let [rdm2, setRdm2] = useState("🍌");
    let [rdm3, setRdm3] = useState("🍇");
    let isWin = (rdm1===(rdm2) && rdm2===(rdm3));
    



    
    
    function play () {
  
    
    setRdm1(rollAgain(randomRoll()));
    setRdm2(rollAgain(randomRoll()));
    setRdm3(rollAgain(randomRoll()));
    
    }

    return (
        <div>
            <h1>{rdm1} {rdm2} {rdm3}</h1>
            {
            isWin ? 
                <div>
                <h2 style={{color:"green"}}>You win</h2> 
                <h3>Congrats</h3> 
                </div> 
             : 
                <h2 style={{color:"red"}}>You lose</h2>

                
            }
            <button onClick={play}>Click</button>
        </div>
    )



}
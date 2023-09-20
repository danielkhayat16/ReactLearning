import Die from "./Die"

export default function DoubleDice(props){

    function randomRoll (props)  {return Math.floor(Math.random() * (props.sides || 6)) + 1;}
    const die1 = randomRoll(props);
    const die2 = randomRoll(props);
    
    const isWinner = (die1 === die2);
    const colorGame = {color: isWinner ? "green" : "red"}
    return(
        <div style={colorGame}>
            <hr />
            This is a double Roll:
            <br />
            Die 1 is: {die1}
            <br />
            Die 2 is:  {die2}
            { isWinner ? <h3>You win </h3> : <h3>You lose</h3>}
            
            
            
            <hr />
        </div>
    )
}
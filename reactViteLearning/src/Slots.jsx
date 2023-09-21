export default function Slots(){
    function randomRoll ()  {return Math.floor(Math.random() * 3) ;}
    const rolls = [];
    function play () {
    for (let i = 0; i<3;i++){
        rolls[i] = randomRoll();
        switch(rolls[i]){
            case 0:
                rolls[i] = "🍒";
                break;
            case 1:
                rolls[i] = "🍌​";
                break;
            case 2:
                rolls[i] = "🍇";
            break;

        }
    }
    }

    play();
    const isWin = rolls[0] === rolls[1] && rolls[1] === rolls[2]
    const c = isWin ? "green" : "red";
    return (
        <div>
            <h1>{rolls}</h1>
            {
            isWin ? 
                <div>
                <h2 style={{color:c}}>You win</h2> 
                <h3>Congrats</h3> 
                </div> 
             : 
                <h2 style={{color:c}}>You lose</h2>

                
            }
            <button onClick={play}>Click</button>
        </div>
    )



}
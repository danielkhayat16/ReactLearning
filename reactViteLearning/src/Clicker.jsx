
export default function Clicker(props){

    function handleClicker(){

        alert(props.message)
        }
        
    return (
        <div>
            
            <button onClick={handleClicker}>{props.buttonText}</button>
        </div>
    )
}
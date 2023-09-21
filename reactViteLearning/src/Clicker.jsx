function handleClicker(){
console.log("⭐​⭐​⭐​⭐​⭐​")}

export default function Clicker(){
    return (
        <div>
            <p>Click the Button</p>
            <button onClick={handleClicker}>Click</button>
        </div>
    )
}
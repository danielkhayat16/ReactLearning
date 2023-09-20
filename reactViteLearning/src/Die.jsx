export default function Die(props){
    const roll = Math.floor(Math.random() * (props.sides || 6)) + 1;
    return <p>Die roll: {roll}</p>
}
export default function Property({element}){

    return(
        <li key={element.id}>
            <h2>Name: {element.name}</h2>
            <h3>Rating: {element.rating}⭐​</h3>
            <h4>Price: {element.price} USD</h4>
            </li>
    )
}
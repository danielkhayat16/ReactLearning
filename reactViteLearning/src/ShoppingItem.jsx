export default function ShoppingItem({element}){
    return (
        <li 
            key={element.id} 
            style={{color: element.completed? "grey" : "red", textDecoration: element.completed? "line-through" : "none"}}
            >
                {element.item} - {element.quantity}
                
        </li>
            
    )

}
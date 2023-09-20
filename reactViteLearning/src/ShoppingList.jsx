import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({items}){

    return (
        <ul>
            {
                items.map((i) => (
                
                <ShoppingItem element={i}>

                </ShoppingItem>))
            }
        </ul>
    )
}
 import "./Dog.css"

 function Dog(props) {

        return <p className="Dog">{props.dogName} says {props.count}: Woof Woof Woof</p>
 }

 export default Dog;
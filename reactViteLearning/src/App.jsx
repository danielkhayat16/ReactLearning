
import './App.css'
import Dog from './Dog' 
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'


function App() {

  const data = 
    [
      {id:1, item: "Eggs", quantity:12, completed: false},
      {id:2, item: "Milk", quantity:1, completed: true},
      {id:3, item: "Chocolate", quantity:2, completed: true},
      {id:4, item: "Butter", quantity:1, completed: false}
    ]
  const properties = [
    {id: 129031, name: "DesertYurt", rating: 4.9, price: 650},
    {id: 129331, name: "Lone Mountain Cabin", rating: 4.5, price: 250},
    {id: 129032, name: "Cactus Retreat", rating: 4.3, price: 850},
    {id: 129033, name: "Redwood Treehose Escape", rating: 4.78, price: 150},
    {id: 129034, name: "OceanView Condo", rating: 5, price: 250},
    {id: 129035, name: "Gold Miner Campground", rating: 4.87, price: 650}
  ]

  return (

     
     <div>
      <Heading text="Welcome" color="orange"></Heading>
      <hr />
      <Dog dogName="Rex" count="twice"></Dog>
      <hr />
      <Die sides={20}></Die>
      <ListPicker val={[1, 2, 3]}></ListPicker>
      <DoubleDice sides={2}></DoubleDice>
      <ColorList colors={["blue", "red", "yellow"]}></ColorList>
      <hr />
      <Slots></Slots>

      <hr />
      This is the Shopping list component:
      <ShoppingList items={data}></ShoppingList>
      <hr />

      <PropertyList propertyList={properties}></PropertyList>

     </div>
  )
}

export default App

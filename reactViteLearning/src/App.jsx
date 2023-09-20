
import './App.css'
import Dog from './Dog' 
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'

function App() {

  return (

     
     <div>
      <Heading text="Welcome" color="orange"></Heading>
      <Dog dogName="Rex" count="twice"></Dog>
      <Die sides={20}></Die>
      <ListPicker val={[1, 2, 3]}></ListPicker>
      <DoubleDice sides={2}></DoubleDice>
      <ColorList colors={["blue", "red", "yellow"]}></ColorList>
     </div>
  )
}

export default App

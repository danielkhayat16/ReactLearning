
import './App.css'
import Dog from './Dog' 
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'

function App() {

  return (
    
     <div>
      <Dog dogName="Rex" count="twice"></Dog>
      <Die sides={20}></Die>
      <ListPicker val={[1, 2, 3]}></ListPicker>
      <DoubleDice sides={2}></DoubleDice>
     </div>
  )
}

export default App

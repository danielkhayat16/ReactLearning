
import './App.css'
import Dog from './Dog' 
import Die from './Die'
import ListPicker from './ListPicker'
function App() {

  return (
    
     <div>
      <Dog dogName="Rex" count="twice"></Dog>
      <Die sides={20}></Die>
      <ListPicker val={[1, 2, 3]}></ListPicker>
     </div>
  )
}

export default App

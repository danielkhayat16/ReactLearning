
import './App.css'
import Dog from './Dog' 
import Die from './Die'

function App() {

  return (
    
     <div>
      <Dog dogName="Rex" count="twice"></Dog>
      <Die sides={20}></Die>
      <Die></Die>
     </div>
  )
}

export default App

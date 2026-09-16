import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter]= useState(17)

  //let counter=13
  const addValue=()=> {
console.log("clicked",counter);
//counter=counter+1
setCounter(counter+1)
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }

  return(
<>
<h1>chai aur react</h1>
<h2>counter value:{counter}</h2>

<button onClick={addValue}>add value{counter}</button>
<button onClick={removeValue} >decrease value{counter}</button>
<p>footer:{counter}</p>
</>
)
}

export default App

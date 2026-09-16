import { useState } from "react"
function App() {
  const [color,setColor]= useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button  onClick ={()=>setColor("red")} className="out-line-none px-4 py-1 rounded-full"
      style={{backgroundColor:"red"}}>Red</button>
    </div>

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button  onClick ={()=>setColor("blue")}className="out-line-none px-4 py-1 rounded-full"
      style={{backgroundColor:"blue"}}>Blue</button>
    </div>

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button  onClick ={()=>setColor("pink")}className="out-line-none px-4 py-1 rounded-full"
      style={{backgroundColor:"pink"}}>pink</button>
    </div>

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button  onClick ={()=>setColor("orange")}className="out-line-none px-4 py-1 rounded-full"
      style={{backgroundColor:"orange"}}>orange</button>
    </div>

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button  onClick ={()=>setColor("yellow")}className="out-line-none px-4 py-1 rounded-full"
      style={{backgroundColor:"yellow"}}>yellow</button>
    </div>

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button  onClick ={()=>setColor("gray")}className="out-line-none px-4 py-1 rounded-full"
      style={{backgroundColor:"gray"}}>gray</button>
    </div>
    </div>
    </div>
    )

}

export default App

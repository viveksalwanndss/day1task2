import { useState } from 'react'
import '../App.css'
import { FaChild } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)


  const handleButtonClick = ()=>{
    console.log("Project is Running!")
  }

  return (
    <>
      <div>
       <p>Hello <FaChild /> My name is Vivek </p>  <br />
        <button style={{border:"1px solid black"}} onClick={handleButtonClick}>button</button>
        

      </div>
      
    </>
  )
}

export default App

import { useState } from 'react'
import '../App.css'
import { FaChild } from "react-icons/fa";
import Counter from '../components/Counter';

function App() {

  const handleButtonClick = ()=>{
    console.log("Project is Running!")
  }

  return (
    <>
      <div>
       <p>Hello <FaChild /> My name is Vivek </p>  <br />
        <button style={{border:"1px solid black"}} onClick={handleButtonClick}>button</button>

        <Counter countValue={0}/>
        

      </div>
      
    </>
  )
}

export default App

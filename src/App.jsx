
import './App.css'
import Gameplay from './Components.jsx/Gameplay'
import { useState } from 'react'
import StartGame from './Components.jsx/StartGame';

function App() {
  const [isgamestart , setIsGamestart]= useState(false);

  const togglegameplay= ()=>{
    setIsGamestart((prev)=>!prev);
  };

  return (
    <>
    {isgamestart ? <StartGame/> : <Gameplay toggle={togglegameplay}/>}
    </>
  )
}

export default App

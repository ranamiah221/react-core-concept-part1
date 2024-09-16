import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Device name="Laptop" price="45000"></Device>
      <Device name="Mobile" price="15000"></Device>
      <Device name="Watch" price="500"></Device>
    </>
  )
  function Person(){
   return(
    <h2>I am Md Rana Miah.</h2>
   )
  }
  function Device(prop){
    console.log(prop);
    return(
      <h2>Device name : {prop.name} with Price : {prop.price}</h2>
    )
  }
}

export default App

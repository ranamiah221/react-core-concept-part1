import './App.css'
import Todo from './Todo'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <Todo task="learn React" isDone="true"></Todo>
      <Todo task="learn react core concept" isDone="false"></Todo>
      <Todo task="Try jsx " isDone="true"></Todo>
      {/* <Person></Person>
      <Device name="Laptop" price="45000"></Device>
      <Device name="Mobile" price="15000"></Device>
      <Device name="Watch" price="500"></Device> */}
    </>
  )
  // function Person(){
  //  return(
  //   <h2>I am Md Rana Miah.</h2>
  //  )
  // }
  // function Device(prop){
  //   console.log(prop);
  //   return(
  //     <h2>Device name : {prop.name} with Price : {prop.price}</h2>
  //   )
  // }
}

export default App

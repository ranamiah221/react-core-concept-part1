import './App.css'
import Singer from './Singer'
import Todo from './Todo'

function App() {
  const singers=[
    {id:1, name:"mahfuzur",age:70},
    {id:2, name:"alom",age:38},
    {id:3, name:"nargis",age:45},
    {id:4, name:"eva rahman",age:35},
  ]

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        singers.map((singer=> <Singer key={singer.id} singer={singer}></Singer>))
      }
      {/* <Todo task="learn React" isDone="true"></Todo>
      <Todo task="learn react core concept" isDone="false"></Todo>
      <Todo task="Try jsx " isDone="true"></Todo> */}
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

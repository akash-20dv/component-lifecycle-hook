import './App.css'
import { useEffect,useState } from 'react'
export default function App() {
  const [counter, setCounter] = useState(0)
  useEffect(()=>{
    console.log('component mounted')
    return ()=>{
      console.log('component will unmount')
    }
  },[])
  useEffect(()=>{
    console.log(counter, "component updated")
  },[counter])
  return (
    <main>
     <h1>Counter Function</h1>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>++</button>
    </main>
  )
}

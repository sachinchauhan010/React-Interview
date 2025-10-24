import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount]= useState(0)

  function handleDecrement(){
    setCount(count-1)
  }

  function handleIncrement(){
    setCount(count+1)
  }

  return (
    <div>
      <div>Counter Machine</div>
      <div className='counterBox'>
        <div onClick={handleDecrement}>-</div>
        <p>{count}</p>
        <div onClick={handleIncrement}>+</div>
      </div>
    </div>
  )
}

export default App

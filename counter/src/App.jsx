
import './App.css'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncrement(){

    setCounter(counter+1);
    setCounter(prev=>prev+1);    // It will again add 1 so when ever the Increment handle will be called
    setCounter(counter+1);       // It will not affect the counter increment value

    //Final function will increment by 2
  }

  function handleDecrement(){
    setCounter(counter-1);
  }

  function handleReset(){
    setCounter(0);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <div className='flex justify-center item-center'>
        <button onClick={handleIncrement} disabled={counter===10} className='border-none px-4 py-2 bg-green-500 text-white'>Increment</button>
        <p className='text-xl bg-gray-700 text-white'>{counter}</p>
        <button onClick={handleDecrement} disabled={counter === 0} className='border-none px-4 py-2 bg-red-500 text-white'>Decrement</button>
        <br />
        <br />
        <button onClick={handleReset} className='border-none px-4 py-2 bg-red-500 text-white'>Reset</button>
      </div>
    </div>
  )
}

export default App

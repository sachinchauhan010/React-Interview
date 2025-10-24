import React, { useContext } from 'react'
import ChildB from './ChildB'
import ChildC from './ChildC'
import { MyContext } from '../context/MyContext'

function ChildA() {
  const {text, setText}= useContext(MyContext);
  return (
    <div>
      <h1>This is Child A component</h1>
      <h1>{text}</h1>

      <button onClick={()=>setText("hello world")} className='border'>Click me</button>
    </div>
  )
}

export default ChildA

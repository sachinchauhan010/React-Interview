import { useContext } from 'react'
import { MyContext } from '../context/MyContext';

function ChildB() {
  const {text, setText}= useContext(MyContext);
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={()=>setText("Hello Programmer")}>Click me</button>
    </div>
  )
}

export default ChildB

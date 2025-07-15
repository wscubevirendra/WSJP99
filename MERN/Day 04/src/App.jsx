import { useState } from "react"
import Count from "./Count"

function App() {
  const [toggle, setToggle] = useState(false)

  function toggleHandler() {
    setToggle(!toggle)
  }
  return (
    <>
      <input type={toggle ? 'text' : 'password'} name="" id="" />
      <button onClick={toggleHandler}>{toggle ? "Hide" : "Show"}</button>
    </>

  )
}


export default App

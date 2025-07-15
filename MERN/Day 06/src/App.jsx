import React, { useState, useRef } from 'react'

function App() {
  const [items, setItems] = useState([])
  const inputRef = useRef()

  function inputHandler() {
    if (inputRef.current.value == "") return alert("input empty")
      setItems([...items, inputRef.current.value]);
    inputRef.current.value = ""

  }

  function removeItem(index) {
    const newData = items.filter((data, i) => i != index);
    setItems(newData)
  }

  return (
    <div className='container'>
      <div className="input-group mb-3">
        <input ref={inputRef} type="text" className="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="basic-addon2" />
        <span onClick={inputHandler} className="input-group-text ms-2" id="basic-addon2">Add</span>
      </div>
      <MyList items={items} removeItem={removeItem} />

    </div>
  )
}


export default App;




function MyList(props) {
  console.log(props)
  return (
    <ul class="list-group my-2">
      {
        props.items.map((data, index) => {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {data}
              <span onClick={() => props.removeItem(index)} style={{ cursor: "pointer" }} class="badge text-bg-primary rounded-pill">Delete</span>
            </li>
          )
        })

      }

    </ul>
  )
}

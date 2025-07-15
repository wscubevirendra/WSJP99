import React, { useState } from "react";

function Count() {
    const [count, setCount] = useState(0)
    // let count = 0
    // function incHandler() {
    //     count++
    //     console.log(count)
    // }

    // function decHandler() {
    //     count--
    //     console.log(count)
    // }



    function incHandler() {
        setCount(count + 1)
    }


    function decHandler() {
        setCount(count - 1)
    }

    return (
        <h1 className="card">
            <button onClick={incHandler} >+</button>
            <h1>{count}</h1>
            <button onClick={decHandler}>-</button>
        </h1>
    )
}

export default Count;

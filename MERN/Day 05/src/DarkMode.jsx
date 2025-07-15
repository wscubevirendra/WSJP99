import React, { useState } from 'react'


export default function DarkMode() {
    const [toggle, setToggle] = useState(true);
    function toggleHandler() {
        setToggle(!toggle)
    }
    return (
        <div className={toggle ? 'light' : "dark"}>
            <button onClick={toggleHandler}>{toggle == true ? "Light Mode" : " Dark Mode"}</button>
        </div>
    )
}

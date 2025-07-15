import React, { useState } from 'react'

export default function NavBar() {
    const [toggle, setToggle] = useState(true);
    function toggleHandler() {
        setToggle(!toggle)
    }

    return (
        <div >
            <button onClick={toggleHandler}>{toggle ? "Hide" : "Show"}</button>

            {
                toggle &&
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            }

        </div>
    )
}

import React from 'react'

export default function Input(props) {
    return (
        <div className="input-group mb-3">
            <input onChange={(e) => {
                props.setSearch(e.target.value)
            }} type="text" className="form-control" placeholder="Movies...." />
            
        </div>
    )
}

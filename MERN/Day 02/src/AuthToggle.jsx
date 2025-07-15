import React, { useState } from 'react';

export default function AuthToggle() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div style={{ padding: 20, maxWidth: 320, border: "1px solid #ccc", borderRadius: 8 }}>

      {/* Toggle Buttons */}
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <button
          onClick={() => setIsSignIn(true)}
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: isSignIn ? '#007bff' : '#e0e0e0',
            color: isSignIn ? 'white' : 'black',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Sign In
        </button>

        <button
          onClick={() => setIsSignIn(false)}
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: !isSignIn ? '#007bff' : '#e0e0e0',
            color: !isSignIn ? 'white' : 'black',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Sign Up
        </button>
      </div>

      {/* Form */}
      <h2 style={{ textAlign: 'center' }}>{isSignIn ? "Sign In" : "Sign Up"}</h2>

      <input type="email" placeholder="Email" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />

      {!isSignIn && (
        <input type="text" placeholder="Full Name" style={inputStyle} />
      )}

      <button style={{
        ...inputStyle,
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}>
        {isSignIn ? "Login" : "Register"}
      </button>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  margin: '10px 0',
  padding: '10px',
  width: '100px'
}

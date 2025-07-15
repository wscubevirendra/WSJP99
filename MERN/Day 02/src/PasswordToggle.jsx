import React, { useState } from 'react';

export default function PasswordToggle() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <input
        type={show ? 'text' : 'password'}
        placeholder="Enter Password"
      />
      <button onClick={() => setShow(!show)}>
        {show ? "🙈 Hide" : "👁 Show"}
      </button>
    </div>
  );
}

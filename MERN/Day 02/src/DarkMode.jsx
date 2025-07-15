import React, { useState } from 'react';


export default function DarkMode() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark-mode' : 'light-mode'}>
      <h2>{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

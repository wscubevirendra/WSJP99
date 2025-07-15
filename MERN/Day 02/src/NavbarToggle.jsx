import React, { useState } from 'react';

export default function NavbarToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setOpen(!open)}>
        {open ? "Hide Navbar" : "Show Navbar"}
      </button>

      {open &&
        <nav style={{ marginTop: 10 }}>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      }
    </div>
  );
}

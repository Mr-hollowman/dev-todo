import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [activebar, setActiveBar] = useState("All");

  const changeMenu = (e) => {
    setActiveBar(e.target.innerText);
  };
  console.log(activebar);
  return (
    <main>
      <h1>#todo</h1>
      <nav>
        <span className={activebar === "All" ? "active":""} onClick={changeMenu}>
          All
        </span>
        <span className={activebar === "Active" ? "active":""}  onClick={changeMenu}>Active</span>
        <span className={activebar === "Completed" ? "active":""}  onClick={changeMenu}>Completed</span>
      </nav>
    </main>
  );
}

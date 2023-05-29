import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  const [activebar, setActiveBar] = useState("All");
  const [todo, setTodo] = useState("");

  const changeMenu = (e) => {
    setActiveBar(e.target.innerText);
  };
  return (
    <main>
      <h1>#todo</h1>
      <Navbar activebar={activebar} changeMenu={changeMenu} />
      <div className="searchBar">
        <input type="text" onChange={(e) => setTodo(e.target.value)} />
        <button className="searchButton">Add</button>
      </div>
    </main>
  );
}

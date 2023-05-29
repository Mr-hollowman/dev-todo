import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  const [activebar, setActiveBar] = useState("All");
  const [todo, setTodo] = useState("");

  const changeMenu = (e) => {
    setActiveBar(e.target.innerText);
  };

  const submitTodo = () => {
    const finalTodo = { active: true, to_do: todo };
    const lsIt = JSON.parse(localStorage.getItem("to_do"));
    var inLocal = [];
    if (lsIt) {
      inLocal = [...lsIt, finalTodo];
    } else {
      inLocal = [finalTodo];
    }
    localStorage.setItem("to_do", JSON.stringify(inLocal));
  };
  return (
    <main>
      <h1>#todo</h1>
      <Navbar activebar={activebar} changeMenu={changeMenu} />
      <div className="searchBar">
        <input type="text" onChange={(e) => setTodo(e.target.value)} />
        <button className="searchButton" onClick={submitTodo}>
          Add
        </button>
      </div>
    </main>
  );
}

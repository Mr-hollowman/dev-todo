import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

export default function App() {
  const [activebar, setActiveBar] = useState("All");
  const [todo, setTodo] = useState("");
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("to_do");
    if (items) {
      setLocalItems(JSON.parse(items));
    }
  }, []);

  const changeMenu = (e) => {
    setActiveBar(e.target.innerText);
  };
  useEffect(() => {
    localItems.length > 0 &&
      localStorage.setItem("to_do", JSON.stringify(localItems));
  }, [localItems]);

  const submitTodo = () => {
    const finalTodo = { id: localItems.length, active: true, to_do: todo };
    setLocalItems((prev) => [...prev, finalTodo]);
  };

  const handleChange = (id, bool) => {
    setLocalItems((prev) => {
      var changedEle = prev.map((item) => {
        if (item.id == id) {
          item.active = bool;
          return item;
        } else {
          return item;
        }
      });
      return [...changedEle];
    });
  };
  return (
    <main>
      <h1>#todo</h1>
      <Navbar activebar={activebar} changeMenu={changeMenu} />
      {activebar === "Completed" ? (
        <></>
      ) : (
        <div className="searchBar">
          <input
            type="text"
            onBlur={(e) => setTodo(e.target.value)}
            placeholder="Add Details"
          />
          <button className="searchButton" onClick={submitTodo}>
            Add
          </button>
        </div>
      )}
      <TodoList
        localItems={localItems}
        handleChange={handleChange}
        type={activebar}
      />
    </main>
  );
}

import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

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
    console.log(id, "id");
    setLocalItems((prev) => {
      var changedEle = prev.map((item) => {
        if (item.id == id) {
          item.active = bool;
          console.log(item, "after change");
          return item;
        } else {
          return item;
        }
      });
      console.log(changedEle, "before return");
      return [...changedEle];
    });
  };
  return (
    <main>
      <h1>#todo</h1>
      <Navbar activebar={activebar} changeMenu={changeMenu} />
      <div className="searchBar">
        <input type="text" onBlur={(e) => setTodo(e.target.value)} />
        <button className="searchButton" onClick={submitTodo}>
          Add
        </button>
      </div>
      <div className="todo_items">
        {localItems.map((item) => {
          return (
            <div key={item.id} className="todo_list">
              <input
                type="checkbox"
                checked={item.active === false}
                onChange={() => handleChange(item.id, item.active === false)}
              />
              {item.active ? <span>{item.to_do}</span> : <s>{item.to_do}</s>}
            </div>
          );
        })}
      </div>
    </main>
  );
}

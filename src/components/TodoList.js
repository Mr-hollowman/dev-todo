import React from 'react'

export default function TodoList({localItems, handleChange, type}) {
  return (
    <div className="todo_items">
    {localItems.filter((item)=>type==='All' ? item : type==='Active' ? item.active : !item.active).map((item) => {
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
  )
}

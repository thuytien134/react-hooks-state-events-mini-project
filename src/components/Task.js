import React from "react";
import { useState } from "react"

function Task({ text, category }) {
  const [isRemove, setIsRemove] = useState(false)
  
  function handleClick(e) {
    setIsRemove(isRemove => !isRemove)
    e.target.parentElement.remove()

  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;

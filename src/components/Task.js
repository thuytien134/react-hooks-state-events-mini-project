import React from "react";
import { useState } from "react"

function Task({ text, category }) {
  const [isRemove, setIsRemove] = useState(false)
  const taskClass = isRemove ? 'hidden' : 'task'
  function handleClick(e) {
    setIsRemove(isRemove => !isRemove)
    e.target.parentElement.remove()

  }

  return (
    <div className={taskClass}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;

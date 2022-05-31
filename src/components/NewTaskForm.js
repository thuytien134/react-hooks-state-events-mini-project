import React from "react";
import {useState} from "react"

function NewTaskForm({listOfCategories,onChangeCategory,onTaskFormSubmit,onchangedetail}) {
  // const [selectedCategory,setSelectedCategory] = useState("")
debugger
  const myCategory=listOfCategories.slice(1).map((category,index)=>{
    return <option key={index} >{category}</option>
  })
  debugger
  // function handleChange(e){
  //   debugger
  // setSelectedCategory(e.target.value)
  // }
  
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={onchangedetail}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onChangeCategory}>
          {/* render <option> elements for each category here */}
          {myCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

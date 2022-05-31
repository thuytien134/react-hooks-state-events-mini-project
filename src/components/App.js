import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  // const [selectedCategory, setSelectedCategory] = useState("")
  // const[formCategory,setFormCategory]=useState("")
  const [task,setTask]=useState(TASKS)
  function handleTask(newtask){
    setTask(newtask)
  }


  // const [detail, setDetail] = useState("")
  // // const [submittedData, setSubmittedData] = useState([]);

  // function handleDetailchange(e) {
  //   // debugger
  //   setDetail(e.target.value)
  // }
  // function handleChange(e) {
  //   // debugger
  //   setFormCategory(e.target.value)
  // }
  // function handleSubmit(e) {
    
  //   e.preventDefault()
  //   let formData = {
  //     text: detail,
  //     category: formCategory
  //   }
  //   const dataArray = [...task, formData]
  //   setTask(dataArray)
  //  setFormCategory("")
  //   setDetail("")
  // }

 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} task = {task}/>
      <NewTaskForm listOfCategories={CATEGORIES.filter(category=>category!=="All")}
      //   onchangedetail={handleDetailchange}
      // onChangecategory={handleChange}
        task={task}
        onTaskFormSubmit={handleTask}
        />
      <TaskList tasks={task} />
    </div>
  );
}

export default App;

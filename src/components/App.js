import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const [task,setTask]=useState(TASKS)
  function handleTask(newtask){
    setTask([...task,newtask])

  }

const tasktodisplay=task.filter(a=>{
  if(selectedCategory==="All"){
return true}
   else{
 return a.category===selectedCategory}}
 )

  /* 
  | Somewhere here
  |
  
  |
  |
  // filter tasks BEFORE line 58. 
  */
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm listOfCategories={CATEGORIES.filter(category=>category!=="All")}
      
        task={task}
        onTaskFormSubmit={handleTask}
        />
      <TaskList tasks={tasktodisplay} />
    </div>
  );
}

export default App;

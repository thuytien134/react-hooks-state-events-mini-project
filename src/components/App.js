import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [detail, setDetail] = useState("")
  const [submittedData, setSubmittedData] = useState([]);
  function handleDetailchange(e) {
    
    setDetail(e.target.value)
  }
  function handleChange(e) {
    
    setSelectedCategory(e.target.value)
  }
  function handleSubmit(e) {
    
    e.preventDefault()
    let formData = {
      text: detail,
      category: selectedCategory
    }
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray)
    setSelectedCategory("")
    setDetail("")
  }
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={TASKS} />
      <NewTaskForm listOfCategories={CATEGORIES}
        onchangedetail={handleDetailchange}
        handleDetailchange={handleDetailchange}
        onChangeCategory={handleChange}
        onTaskFormSubmit={handleSubmit}
        />
      <TaskList tasks={TASKS} submittedData={submittedData}/>submittedData
    </div>
  );
}

export default App;

import React from "react";
import {useState} from "react"

function CategoryFilter({categories,selectedCategory,setSelectedCategory}) {
  const [active,setActive]=useState(false)
function handleClick(category){
  setSelectedCategory(category)
}

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category,index)=>{

    return <button key = {index} onClick={(e)=>{
      e.target.className="selected" 
      handleClick(category)}}>{category}</button>

  })}
    </div>
  );
}

export default CategoryFilter;

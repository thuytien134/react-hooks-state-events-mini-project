import React from "react";
import {useState} from "react"

function CategoryFilter({categories}) {
  const [isClicked,setIsClicked]=useState("false")
function handleClick(e){
  setIsClicked(isClicked=>!isClicked)
   e.target.className = "selected"
  
  }
  // const myCategory = categories.filter(category=>{
  //   category.className === "selected"
  // })
  
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category,index)=>{
    return <button key = {index} onClick={handleClick}>{category}</button>
  })}
    </div>
  );
}

export default CategoryFilter;

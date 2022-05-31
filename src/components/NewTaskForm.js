import React from "react";
import {useState} from "react"

function NewTaskForm({listOfCategories,onTaskFormSubmit,task}) {



const [selectedCategory, setSelectedCategory] = useState("Code")
  const [detail, setDetail] = useState("")
  // const [submittedData, setSubmittedData] = useState([]);

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

            // const dataArray = [...task, formData]
            onTaskFormSubmit(formData)
            setSelectedCategory("")
            setDetail("")
          }
        
        
        
        
        
        
        return (
          <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailchange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {/* render <option> elements for each category here */}
     {/* {listOfCategories.map((category,index)=>{
        return <option key={index} >{category}</option>
      })} */}
     {[<option key='1' >Code</option>,
     <option key='2'>Money</option>,
     <option key='3' >Food</option>,
     <option key='4' >Misc</option>]}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

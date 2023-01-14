import React from "react";
import Todo from "./Todo";

const Filter = ({ todos, setTodos, filterInput, setFilterInput }) => {
  //Events
  const filterInputHandler = (event) => {
    // console.log(event.target.value);
    setFilterInput(event.target.value);
    console.log(filterInput);
    
    if(todos.filter((value) => value.text.indexOf(filterInput))){
       console.log("display");}
  }; 

  const deleteAllHandler = () => {
    setTodos([]);
  };

  return (
    <div className="filter">
      <form>
        <div className="input">
          <label>Filter by activity</label>
          <input 
            value={filterInput}
            onChange={filterInputHandler}
            type="text"
            className="filter-input" />
        </div>
        <div className="input">
        <label>&nbsp;</label>
        <button onClick={deleteAllHandler} className="trashAll-btn">
          Delete All List
        </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;

import React from "react";
import Todo from "./Todo";

const Filter = ({ filterInput, setFilterInput, setTodos, todos }) => {
  //Events
console.log(filterInput);

  const filterInputHandler = (event) => {
    setFilterInput(event.target.value);
    console.log(setFilterInput);

    if(filterInput.includes(todos)){
        console.log("display");
    }
    else{
    }
  }; 

  const deleteAllHandler = () => {
    setTodos([]);
  };

  return (
    <div className="filter">
      <form action="">
        <div className="input">
          <label>Filter by activity</label>
          <input 
            value={filterInput}
            // onChange={filterInputHandler}
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

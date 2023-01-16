import React from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";

const Filter = ({ todos, setTodos, filterInput, setFilterInput }) => {
  //Events
  const filterInputHandler = (e) => {
    // console.log(event.target.value);
    setFilterInput(e.target.value);
    console.log(filterInput);

    todos.filter((todo)=>{todo.text.includes(filterInput)})
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

import React from "react";

const Form = ({todos, setTodos, inputText, setInputText,setStatus}) => {
    const inputTextHandler =(event)=>{
       setInputText(event.target.value);
    };
    const submitTodoHandler = (event) => {
      event.preventDefault();
      setTodos([
        ...todos, 
        {text: inputText, completed: false, id: Math.random()*1000}
      ]);
      setInputText("");
    }
    const statusHandler = (event) => {
      setStatus(event.target.value);
    };
  return (
    <form>
      <div className="input">
        <label>Add a Todo</label>
        <input
          value={inputText}
          onChange={inputTextHandler} 
          type="text" 
          className="todo-input" />
      </div>
      <div className="input">
        <label>&nbsp;</label>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>

      <div className="select">
        <label>Filter by status</label>
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

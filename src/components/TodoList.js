import React from "react";
//Import Components
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filterdTodos}) => {
 
  return (
    <div className="todo-container">
      <p>Todo List</p>
      <ul className="todo-list">
        {filterdTodos.map(todo =>(
          <Todo 
            setTodos={setTodos} 
            todos={todos} 
            key={todo.id} 
            todo={todo}
            text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList; 



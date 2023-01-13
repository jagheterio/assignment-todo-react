import React, {useState, useEffect} from 'react';
import './App.css';
// Importing Components
import Form from "./components/Form";
import TodoList from './components/TodoList';
import Filter from './components/Filter';

function App() {
  // State stuff
  const [inputText, setInputText]=useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterdTodos, setFilteredTodos] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  // RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use Effect
  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]); 

  // Functions
  const filterHandler =() => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // Save to local
  const saveLocalTodos =()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
    };
  const getLocalTodos =() =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
     <header>
        <h1>My Todo List</h1>
    </header>
    <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
    <Filter
      filterInput ={filterInput}
      />
    <TodoList 
      filterdTodos={filterdTodos}
      setTodos={setTodos} 
      todos={todos}/>
    </div>
  );
}

export default App;

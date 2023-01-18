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
  const [loadedTodos, setLoadedTodos] = useState(false);

  // RUN ONCE when the app start
  useEffect(()=> {
    if (loadedTodos)
    saveLocalTodos();
  }, [todos]); 

  // const setTodosHandler = (todos)=>{
  //   setTodos(todos)
  //   saveLocalTodos()
  // }

  useEffect(() => {
    getLocalTodos();
    setLoadedTodos(true) 
   }, []);

  // Use Effect
  useEffect(()=> {
    filterHandler();
  }, [todos, status, filterInput]); 


  // Functions
  const filterHandler =() => {

    const inputFilterTodo = todos.filter((todo)=>todo.text.includes(filterInput));

    switch(status){
      case "completed":
        setFilteredTodos(inputFilterTodo.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(inputFilterTodo.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(inputFilterTodo);
        break;
    }
  };
  // Save to local
  const saveLocalTodos =()=>{
      console.log("save", JSON.stringify(todos));
      localStorage.setItem('todos', JSON.stringify(todos));
    };
  const getLocalTodos =() =>{
    console.log("get", localStorage.getItem('todos') );
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
      setFilterInput ={setFilterInput}
      setTodos={setTodos}
      />
    <TodoList 
      filterdTodos={filterdTodos}
      setTodos={setTodos} 
      todos={todos}/>
    </div>
  );
}

export default App;

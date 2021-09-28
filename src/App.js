import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
import Todoform from './components/todoform';
import TodoItemsList from './components/todoitemslist';


const LOCAL_STORAGE_KEY = "todo-list";

function App() {
  const [todos,setTodos]=useState([]);
  
  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo){
    setTodos([todo,...todos]);
  }
  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TO-DO LIST </p>
        <Todoform addTodo={addTodo}></Todoform>
        <TodoItemsList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      </header>
    </div>
  );
}

export default App;

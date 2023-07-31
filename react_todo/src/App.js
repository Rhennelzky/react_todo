import React, {useState, useEffect} from "react";
import './App.css';
//Importing components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() { 

  //State stuff
  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect
  useEffect(() =>{

    // console.log('hello'); 
    filterHandler();
  
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Rhennel's Todo List {inputText}</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}          
      />
      <Todolist 
        filteredTodos={filteredTodos}
        setTodos={setTodos} 
        todos={todos} 
      />

    </div>
  );
}

export default App;

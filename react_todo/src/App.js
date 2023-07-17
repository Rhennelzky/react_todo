import React, {useState} from "react";
import './App.css';
//Importing components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {

  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Rhennel's Todo List {inputText}</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <Todolist />
    </div>
  );
}

export default App;

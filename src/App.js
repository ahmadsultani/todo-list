import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const completed = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed : !todo.completed 
          }
        }
        return todo
    }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>TODO</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} completed={completed} removeTodo={removeTodo} />
    </div>
  )
}

export default App;

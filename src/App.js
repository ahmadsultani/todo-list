import React, {useState} from 'react';

import Form from './components/Form';
import List from './components/List';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const completed = (id) => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          completed: todo.id === id ? !todo.completed : todo.completed,
        };
      }));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>TODO</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} completed={completed} removeTodo={removeTodo} />
    </div>
  );
}

export default App;

import React from 'react'
import Todo from './Todo'

function List({todos, completed, removeTodo}) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} completed={completed} removeTodo={removeTodo}/>
      ))}
    </ul>
  );
}

export default List
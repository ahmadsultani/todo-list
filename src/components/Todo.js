import React from 'react'

function Todo({todo, completed, removeTodo}) {
  const handleClick = () => {
    completed(todo.id)
  }

  const handleRemove = () => {
    removeTodo(todo.id)
  }

  return (
    <div className="todo-item"style = {{border: todo.completed ? "2px solid black": "1px solid black"}}>
      <input className="tgl" type="checkbox" checked={todo.completed ? true : false}onClick={handleClick}/>
      <li onClick={handleClick}>{todo.text}</li>
      <button className="btn" onClick={handleRemove}>Delete</button>
    </div>

  )
}

export default Todo
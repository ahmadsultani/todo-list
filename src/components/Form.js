import React, {useState} from 'react';

function Form({addTodo}) {
  const [item, setItem] = useState({
    text: '',
    id: '',
    completed: false,
  });

  const handleChange = (e) => {
    setItem({...item, text: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.text.length !== 0) {
      item.text.trim();
      addTodo({...item, id: Date.now()});
      setItem({...item, text: ''});
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input className="input-box" type="text" placeholder='Add an item' value={item.text} onChange={handleChange} />
      <button className="btn" type='submit'>Add</button>
    </form>
  );
}

export default Form;
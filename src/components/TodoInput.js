import React, { useState } from 'react';
import { useActions } from 'react-redux';
import{ addTodoAction } from '../actions';
import uuid from 'uuid/v4';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const addTodo = useActions((todo) => addTodoAction(todo));

  const onChange = event => {
    setTodo(event.target.value);
  }
  const onSubmit = event => {
    event.preventDefault();
    if(todo.trim() === '') return;

    addTodo({
      id: uuid(),
      name: todo,
      complete: false
    })

    setTodo('');
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input type="text" name="todo" placeholder="Add todo" value={todo} onChange={onChange}/>
        <button type="submit">Add todo</button>
      </div>

    </form>
  )
}

export default TodoInput;
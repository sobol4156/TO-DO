
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { useState } from 'react'
import { AppDispatch, RootState } from './store';



function App() {
  const [newTodo, setNewTodo] = useState<string>('')

  const  todos = useSelector((state:RootState) => state.todos.todos)
  const dispatch = useDispatch<AppDispatch>()

  function addTodo() {
    if (newTodo) {
      dispatch(addTodo(newTodo))
      setNewTodo('')
    }
  }

  function toggleTodo(index: number) {
    dispatch(toggleTodo(index))
  }

  function deleteTodo(index: number) {
    dispatch(deleteTodo(index))
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} type="text" id="new-todo" placeholder="Add a new task..." />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul id="todo-list">
        {todos.map((el, index) => (
          <div className='list-item'>
            <input onChange={() => toggleTodo(index)} type="checkbox" />
            <li
              className={el.completed ? 'completed' : ''}
              key={index}
            >
              <span>
                {el.text}
              </span>
            </li>
            <button onClick={(e) => {
              e.stopPropagation;
              deleteTodo(index);
            }}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App

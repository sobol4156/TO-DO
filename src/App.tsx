
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { useState } from 'react'
import { AppDispatch, RootState } from './store';
import { addTodo, deleteTodo, toggleTodo } from './features/todo/todoSlice';



function App() {
  const [newTodo, setNewTodo] = useState<string>('')

  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch<AppDispatch>()

  function newAddTodo() {
    if (newTodo) {
      dispatch(addTodo(newTodo))
      setNewTodo('')
    }
  }//ну хз чё у тебя с гитом, попробуй пофиксить тут

  function newToggleTodo(index: number) {
    dispatch(toggleTodo(index))
  }

  function newDeleteTodo(index: number) {
    dispatch(deleteTodo(index))
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} type="text" id="new-todo" placeholder="Add a new task..." />
        <button onClick={newAddTodo}>Add</button>
      </div>
      <ul id="todo-list">
        {todos.map((el, index) => (
          <div key={index} className='list-item'>
            <input onChange={() => newToggleTodo(index)} type="checkbox" />
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
              newDeleteTodo(index);
            }}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App

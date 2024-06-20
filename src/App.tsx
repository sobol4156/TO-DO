
import './App.css'
import { useState } from 'react'

interface Todo {
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState<string>('')

  function addTodo() {
    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  function toggleTodo(index: number) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  function deleteTodo(index: number) {
    const updateTodos = todos.filter((_, i) => i !== index);
    setTodos(updateTodos)
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

import {React, useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className='bg-[#CEDEBD] w-[400px] mx-auto mt-[100px] rounded-md'>
        <h1 className='text-center text-[#435334] text-2xl font-semibold pt-2'>Get Things Done!</h1>
        <div className='pb-2'>
          <TodoForm addTodo={addTodo}/>
          <div className='pt-2'>
          {todos.map((todo) => (
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
              <Todo task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
              )))}
          </div>

        </div>

        
        
    </div>
  )
}

export default TodoWrapper
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'




const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {


  return (
    <div className='flex justify-between bg-[#9EB384] p-2 mx-2 rounded-md my-2 text-[#FAF1E4] font-semibold hover:cursor-pointer'>
        <p onClick={() => toggleComplete(task.id)} className={task.completed ? 'line-through' : ''}>{task.task}</p>
        <div className=''>
            <FontAwesomeIcon className='hover:cursor-pointer' icon={faPenToSquare} color='#435334' onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon className='hover:cursor-pointer ml-2' icon={faTrash} color='#435334' onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo
import {React , useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        (value !== '') && editTodo(value, task.id);
        
        
    }

  return (
    <form className='flex justify-center m-2' onSubmit={handleSubmit}>
        
            <input className='outline-none bg-transparent border border-[#9EB384] font-semibold text-[#435334] placeholder-[#435334] p-2 w-full'
                   type='text'
                   value={value}
                   placeholder='Update Task'
                   onChange={e => setValue(e.target.value)}/>
            <button className='bg-[#9EB384] w-[100px] text-[#FAF1E4] font-semibold'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
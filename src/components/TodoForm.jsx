import {React , useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        (value !== '') && addTodo(value);
        setValue('');
        
        
    }

  return (
    <form className='flex justify-center m-2 pt-2' onSubmit={handleSubmit}>
        
            <input className='outline-none bg-transparent border border-[#9EB384] font-semibold text-[#435334] placeholder-[#435334] p-2 w-full'
                   type='text'
                   value={value}
                   placeholder='Enter a task...'
                   onChange={e => setValue(e.target.value)}/>
            <button className='bg-[#9EB384] w-[100px] text-[#FAF1E4] font-semibold'>Add Task</button>
    </form>
  )
}

export default TodoForm
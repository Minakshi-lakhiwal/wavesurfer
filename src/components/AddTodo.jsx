import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {addTodo} from '../features/todo/todoSlice'
function AddTodo(){
    const [input,setInput]=useState('')
   const  dispatch = useDispatch()
   const todosHandler=(e)=>{
   e.preventDefault();
   dispatch(addTodo(input))
   setInput('')
   }
  return (
    <div>AddTodo
         <form onSubmit={todosHandler}>
           <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
           <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}
export default AddTodo
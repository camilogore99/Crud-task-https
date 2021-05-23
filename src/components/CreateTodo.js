import React from 'react'
import { useForm } from 'react-hook-form'

const CreateTodo = ( { setValueIputs, } ) => {

   const { register, handleSubmit, reset } = useForm()

   const onSubmit = (value ) => {
      setValueIputs(value);
      reset()
   }

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)} >
            <div>
               <label htmlFor="task" >Task </label>
               <input type="text" id="task" { ...register('task') } />
            </div>
            <div>
               <label htmlFor="student" >Student </label>
               <input type="text" id="student" {...register('student')}/>
            </div>
            <button>Crear</button>
         </form>
      </div>
   )
}

export default CreateTodo

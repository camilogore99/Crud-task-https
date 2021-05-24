import React from 'react'
import { useForm } from 'react-hook-form'

const CreateTodo = ( { setValueIputs, } ) => {

   const { register, handleSubmit, reset } = useForm()

   const onSubmit = (value ) => {

      const { student, task } = value

      const data = {
         student,
         task,
         isCompleted:false,
      }
      setValueIputs(data);
      reset()
   }

   return (
      <div className="container-form">
         <form onSubmit={handleSubmit(onSubmit)} >
            <div>
               <div>
                  <label htmlFor="task" >Task </label>
               </div>
               <div>
                  <input type="text" id="task" { ...register('task') } />
               </div>
            </div>
            <div>
               <div>
                  <label htmlFor="student" >Student </label>
               </div>
               <div>
                  <input type="text" id="student" {...register('student')}/>
               </div>
            </div>
            <div className="row mt-3">
              <button className="btn btn-primary">Crear</button> 
            </div>
         </form>
      </div>
   )
}

export default CreateTodo

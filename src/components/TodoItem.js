import React, {useState} from 'react'

const TodoItem = ({ task, student, isCompleted, id, setUserId, updateCheck }) => {
   
   const [isChecked, setIsChecked] = useState(isCompleted)

   const taskTodo = {
      task,
      student,
      isCompleted,
      id
   }

   return (
      <div>
         <div className="mt-2 info-todo">
            <table className="table table-dark table-striped">
               <thead>
                  <tr>
                     <th>Student</th>
                     <th>Task</th>
                     <th>Completed</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{student}</td>
                     <td>{task}</td>
                     <td>
                        <div className="form-check form-switch">
                           <input className="form-check-input" 
                           type="checkbox" id="flexSwitchCheckChecked"
                           checked={isChecked} 
                           onChange={() => {
                              setIsChecked(!isChecked)
                              updateCheck(id, taskTodo, !isChecked )
                           }}/>
                           <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                        </div>
                     </td>
                     <td>
                        <button className="btn btn-danger" onClick={() => setUserId(id)}>Delete
                        </button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}
export default TodoItem

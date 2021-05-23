import React from 'react'

const TodoItem = ({ task, student, isCompleted, id, setUserId }) => {
   return (
      <div>
         <div className="info-todo">
            <table>
               <thead>
                  <tr>
                     <th>Student</th>
                     <th>Task</th>
                     <th>IsCompleted</th>
                     <th>Completed</th>
                     <th>Delete</th>
                     <th>Update</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{student}</td>
                     <td>{task}</td>
                     <td>{isCompleted}true</td>
                     <td>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <label class="form-check-label" for="flexSwitchCheckChecked">
                        
                        </label>
                     </td>
                     <td><button onClick={() => setUserId(id)}>Delete</button></td>
                     <td><button onClick={() => console.log('vamos a actualizar')}>Update</button></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}
export default TodoItem

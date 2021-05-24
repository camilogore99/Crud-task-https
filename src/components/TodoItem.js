import React from 'react'

const TodoItem = ({ task, student, isCompleted, id, setUserId }) => {
   return (
      <div>
         <div className="mt-2 info-todo">
            <table className="table table-dark table-striped">
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
                        <div className="form-check form-switch">
                           <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
                           <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                        </div>
                     </td>
                     <td><button className="btn btn-danger" onClick={() => setUserId(id)}>Delete</button></td>
                     <td><button className="btn btn-warning" onClick={() => console.log('vamos a actualizar')}>Update</button></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}
export default TodoItem

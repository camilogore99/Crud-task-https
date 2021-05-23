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
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{student}</td>
                     <td>{task}</td>
                     <td>{isCompleted}true</td>
                     <td>{'true o false'}</td>
                     <td><button onClick={() => setUserId(id)}>Delete</button></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}
export default TodoItem

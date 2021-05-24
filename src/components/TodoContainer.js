import React, {useState, useEffect} from 'react'
import post from '../service/Post'
import TodoItem from './TodoItem'
import get from '../service/Get'
import CreateTodo from './CreateTodo'
import deleteApi from '../service/Delete'
import put from '../service/Put'

const TodoContainer = () => {

   const [dataUsers, setDataUsers] = useState([]);
   const [valueIputs, setValueIputs] = useState(false);
   const [userId, setUserId] = useState(null);
   
   
   useEffect(() => {
      get().then( ( res ) => {
         setDataUsers(res.data.todos.slice(0, res.data.todos.length))
      }) 
   }, [valueIputs, dataUsers])

   useEffect(() => {
      if (valueIputs) {
         console.log(valueIputs);
         post(valueIputs)
      }
   }, [valueIputs])

   useEffect(() => {
      if (userId) {
         deleteApi( userId )
      }
   }, [userId])

   const updateCheck = (id, todo, bolean) => {
      console.log(bolean);
      put(id, {...todo, isCompleted:bolean} )
   }

   const list = dataUsers.map( ( value ) => {
      return <TodoItem 
        task={value.task}
        student={value.student}
        isCompleted={value.isCompleted} 
        key={value.id} 
        id={value.id} 
        setUserId={setUserId}
        updateCheck={updateCheck}
         />
   } )


   return (
      <div className="container">
         <div className="title">
            <h1>Crud https App</h1>
         </div>
         <div>
            <div className="form">
               <CreateTodo setValueIputs={setValueIputs} setUserId={setUserId}  />
            </div>
            { dataUsers ? list : ''}
         </div>
      </div>
   )
}

export default TodoContainer

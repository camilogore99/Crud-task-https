import axios from 'axios'

const url = `https://todos-go.herokuapp.com/api/todos`

const post = (newData) => {

   const promise = axios({
      method:'POST',
      url:url,
      data:newData,
   })
   
   return promise
}

export default post 
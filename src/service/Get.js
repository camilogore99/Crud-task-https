import axios from 'axios'

const url = `https://todos-go.herokuapp.com/api/todos`

const get = () => {

   const promise = axios({
      method: 'GET',
      url: url, 
   })

   return promise
}
export default get ;
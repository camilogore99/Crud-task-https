import axios from 'axios'

const url = `https://todos-go.herokuapp.com/api/todos`

const put = ( id, data) => {

   const promise = axios( {
      method: 'PUT',
      url: `${url}/${id}`,
   })
   
   return promise;

}
export default put;
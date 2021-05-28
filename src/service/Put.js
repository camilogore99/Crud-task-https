import axios from 'axios'

const url = `https://todos-go.herokuapp.com/api/todos`

const put = ( id, dataUpdate ) => {

   const promise = axios( {
      method: 'PUT',
      url: `${url}/${id}`,
      data: dataUpdate,
   })
   
   return promise;

}
export default put;
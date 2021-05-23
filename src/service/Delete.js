
import axios from 'axios'

const url = `https://todos-go.herokuapp.com/api/todos`;

const deleteApi = ( idApi) => {
   
   const promise = axios({
      method:'delete',
      url:`${url}/${idApi}`
   })
   return promise;
}
export default deleteApi;
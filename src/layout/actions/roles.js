import axios from 'axios'
export const getAllRoles = ()=> async dispatch =>{

    const result = await axios.get('http://localhost:3000/roles')
    dispatch({
        type:"GET_ALL_ROLES",
        data:result.data.message
    })
}
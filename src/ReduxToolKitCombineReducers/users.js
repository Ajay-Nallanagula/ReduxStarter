import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        usersAdded : (users,action)=>{
            const {id,name} = action.payload
            return [...users,{ id,name}]
        },
       
    }
})

const {reducer:usersReducer,actions:{usersAdded}} = slice
export {usersAdded, usersReducer as default}
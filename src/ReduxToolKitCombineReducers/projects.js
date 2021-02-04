import {createSlice} from '@reduxjs/toolkit'
let projectId =0
const slice = createSlice({
    name:'projects',
    initialState:[],
    reducers:{
        projectAdded : (projects,action)=>{
            return [...projects,{ id:++projectId,name:action.payload.name}]
        },
        projectDeleted:(projects,action)=>{
            return projects.filter(project =>project.id !== action.payload.id)
        }
    }
})

const {reducer:projectReducer,actions:{projectAdded,projectDeleted}} = slice
export {projectAdded,projectDeleted, projectReducer as default}
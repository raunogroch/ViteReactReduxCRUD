import { createSlice } from "@reduxjs/toolkit";

const ADD_TODO = 'ADD_TODO'

const initialState = []

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            return [...state, action.payload]
        },
        deleteTodo: (state, action) => {
            const indexFound = state.find(item => item.id===action.payload)
            if(indexFound){
                state.splice(state.indexOf(indexFound), 1)
            }
        },
        updateTodo: (state, action) => {
            const {id, title, description} = action.payload
            const foundTodo = state.find(todo => todo.id === id)
            if(foundTodo){
                foundTodo.title = title
                foundTodo.description = description
            }
        }
    }
})



export const {addTodo, deleteTodo, updateTodo} = todosSlice.actions
export default todosSlice.reducer
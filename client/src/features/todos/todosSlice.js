import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todosList: [],
  },
  reducers: {
    asynchFetchTodos: (state, action) => {
      console.log(state.todosList)
      state.todosList = action.payload
    },
  },
})

// console.log(initialState)

const { asynchFetchTodos } = todosSlice.actions

export const fetchTodos = () => (dispatch) => {
  axios.get("/api/:id/todos").then((resp) => {
    const todos = resp.data
    // for (let i = 0; i < todos.length; i++) {
    console.log(todos)
    dispatch(asynchFetchTodos(todos))
    // }
    // console.log(todosList)
  })
}

export const selectTodosList = (state) => state.todos.todoslist

export default todosSlice.reducer

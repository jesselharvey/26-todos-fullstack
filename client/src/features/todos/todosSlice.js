import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todosList: [],
  },
  reducers: {
    asynchFetchTodos: (state, action) => {
      state.todosList = action.payload
      console.log(state.todosList)
    },

    addTodoFunct: (state, action) => {
      state.todosList.push(action.payload)
    },

    deleteTodoFunct: (state, action) => {
      state.todosList = state.todosList.filter((todo) =>{
        return todo.id !== action.payload.id
      })
    },
  },
})

// console.log(initialState)

const { asynchFetchTodos, } = todosSlice.actions

export const fetchTodos = () => (dispatch) => {
  axios.get("/api/todos").then((resp) => {
    const todos = resp.data
    // for (let i = 0; i < todos.length; i++) {
    console.log(todos)
    dispatch(asynchFetchTodos(todos))
    // }
    // console.log(todosList)
  })
}

export const addTodo = (text) => (dispatch) => {
  axios.post("api/todos", {content: text}).then((resp) => {
    // console.log(text)
    dispatch(fetchTodos())
  })
}

export const deleteTodo = (todo) => (dispatch) => {
  axios.delete("/api/todos/" + todo.id).then((resp) => {
    dispatch(fetchTodos())
  })
}

export const selectTodosList = (state) => state.todos.todosList

export default todosSlice.reducer

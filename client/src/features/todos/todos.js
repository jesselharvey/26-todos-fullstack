import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos, selectTodosList } from "./todosSlice"

//import the data directly into the component instead of the slice

export function TodosHome() {
  const dispatch = useDispatch()

  const todoList = useSelector(selectTodosList)

  // let todos = []

  useEffect(() => {
    // console.log(todoList)
    dispatch(fetchTodos(todoList))
  }, [])

  // console.log(todoList)

  return (
    <div>
      {/* {[todoList].map((todo) => (
        <div key={todo.id}>
          <span>{todo.id}</span>
        </div>
      ))} */}
    </div>
  )
}

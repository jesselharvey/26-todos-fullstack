import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos, selectTodosList, deleteTodo, addTodo } from "./todosSlice"

//import the data directly into the component instead of the slice

export function TodosHome() {
  const dispatch = useDispatch()

  const todoList = useSelector(selectTodosList)

  const [todoText, setTodoText] = useState("")
  // const [todos, setTodos] = useState()
  // const [editState, setEditState] = useState(false)

  // let todos = []

  useEffect(() => {
    dispatch(fetchTodos())
    // console.log(todoList)
  }, [dispatch])

  // function toggleEdit(x) {
  //   console.log(x)
  //   todoList.filter((todo) => {
  //     console.log(todo.id === x.id)
  //     // return todo.id == x.id
  //     // if (todo.id === x.id) {
  //     // setEditState(!editState)
  //     // console.log(x)
  //     return todo.id === x.id ? {...x, editState: 'active'} : {x}
  //     // console.log("true")
  //     // }
  //   })
  // }

  function handleDelete(todo) {
    console.log(todo)
    dispatch(deleteTodo(todo))
    // dispatch(fetchTodos())
  }

  function handleAddTodo(e, todoText) {
    e.preventDefault()
    console.log(todoText)
    dispatch(addTodo(todoText))
    setTodoText("")
  }
  // function handleSubmit() {
  //   e.preventDefault()
  // }

  // console.log(todoList)
  // const newSvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNDczIDcuMTk2Yy0uNDI1LS40MzktLjQwMS0xLjEyNy4wMzUtMS41NTJsNC40NjEtNC4zMjZjLjIxOC0uMjExLjQ5OC0uMzE4Ljc3NS0uMzE4LjI4MiAwIC41NjMuMTEuNzc2LjMzMWwtNi4wNDcgNS44NjV6bS03LjMzNCAxMS4wMjFjLS4wOTIuMDg5LS4xMzkuMjA4LS4xMzkuMzI3IDAgLjI1LjIwNC40NTYuNDU2LjQ1Ni4xMTQgMCAuMjI5LS4wNDIuMzE3LS4xMjhsLjc0OS0uNzI5LS42MzMtLjY1NC0uNzUuNzI4em02LjMzLTguNDI1bC0yLjU2NCAyLjQ4NWMtMS4zNzggMS4zMzYtMi4wODEgMi42My0yLjczIDQuNDM3bDEuMTMyIDEuMTY5YzEuODI1LS41OTMgMy4xNC0xLjI1NSA0LjUxOC0yLjU5MWwyLjU2My0yLjQ4Ni0yLjkxOS0zLjAxNHptNy40NzctNy42NTlsLTYuNjA0IDYuNDA1IDMuMzI2IDMuNDM0IDYuNjA0LTYuNDAzYy40ODUtLjQ2OS43MjgtMS4wOTMuNzI4LTEuNzE4IDAtMi4wODgtMi41My0zLjE5Ni00LjA1NC0xLjcxOHptLTEuOTQ2IDExLjMzM3Y3LjUzNGgtMTZ2LTEyaDguMDEzbDIuMDU4LTJoLTEyLjA3MXYxNmgyMHYtMTEuNDczbC0yIDEuOTM5eiIvPjwvc3ZnPg=="
  const trashSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik05IDNoNnYtMS43NWMwLS4wNjYtLjAyNi0uMTMtLjA3My0uMTc3LS4wNDctLjA0Ny0uMTExLS4wNzMtLjE3Ny0uMDczaC01LjVjLS4wNjYgMC0uMTMuMDI2LS4xNzcuMDczLS4wNDcuMDQ3LS4wNzMuMTExLS4wNzMuMTc3djEuNzV6bTExIDFoLTE2djE4YzAgLjU1Mi40NDggMSAxIDFoMTRjLjU1MiAwIDEtLjQ0OCAxLTF2LTE4em0tMTAgMy41YzAtLjI3Ni0uMjI0LS41LS41LS41cy0uNS4yMjQtLjUuNXYxMmMwIC4yNzYuMjI0LjUuNS41cy41LS4yMjQuNS0uNXYtMTJ6bTUgMGMwLS4yNzYtLjIyNC0uNS0uNS0uNXMtLjUuMjI0LS41LjV2MTJjMCAuMjc2LjIyNC41LjUuNXMuNS0uMjI0LjUtLjV2LTEyem04LTQuNXYxaC0ydjE4YzAgMS4xMDUtLjg5NSAyLTIgMmgtMTRjLTEuMTA1IDAtMi0uODk1LTItMnYtMThoLTJ2LTFoN3YtMmMwLS41NTIuNDQ4LTEgMS0xaDZjLjU1MiAwIDEgLjQ0OCAxIDF2Mmg3eiIvPjwvc3ZnPg=="
  const editSvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMS40MzkgMTYuODczbC0xLjQzOSA3LjEyNyA3LjEyOC0xLjQzNyAxNi44NzMtMTYuODcyLTUuNjktNS42OS0xNi44NzIgMTYuODcyem00LjcwMiAzLjg0OGwtMy41ODIuNzI0LjcyMS0zLjU4NCAyLjg2MSAyLjg2em0xNS4wMzEtMTUuMDMybC0xMy42MTcgMTMuNjE4LTIuODYtMi44NjEgMTAuODI1LTEwLjgyNiAyLjg0NiAyLjg0NiAxLjQxNC0xLjQxNC0yLjg0Ni0yLjg0NiAxLjM3Ny0xLjM3NyAyLjg2MSAyLjg2eiIvPjwvc3ZnPg=="
  const activeSvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMWM2LjA2NSAwIDExIDQuOTM1IDExIDExcy00LjkzNSAxMS0xMSAxMS0xMS00LjkzNS0xMS0xMSA0LjkzNS0xMSAxMS0xMXptMC0xYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
  const completeSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAwYzYuNjIzIDAgMTIgNS4zNzcgMTIgMTJzLTUuMzc3IDEyLTEyIDEyLTEyLTUuMzc3LTEyLTEyIDUuMzc3LTEyIDEyLTEyem0wIDFjNi4wNzEgMCAxMSA0LjkyOSAxMSAxMXMtNC45MjkgMTEtMTEgMTEtMTEtNC45MjktMTEtMTEgNC45MjktMTEgMTEtMTF6bTcgNy40NTdsLTkuMDA1IDkuNTY1LTQuOTk1LTUuODY1Ljc2MS0uNjQ5IDQuMjcxIDUuMDE2IDguMjQtOC43NTIuNzI4LjY4NXoiLz48L3N2Zz4="

  console.log(todoText)

  return (
    <div>
      <form onSubmit={(e) => {handleAddTodo(e, todoText)}}>
        <input value={todoText} onChange={(e) => setTodoText(e.target.value)} type="text"></input>
        {/* <button></button> */}
      </form>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <img //onClick={() => toggleEdit(todo)} 
          src={editSvg} />
          {todo.editState === 'active' ? 
          <textarea defaultValue={todo.cont}></textarea> :
          <span>{todo.cont}</span>}
          {/* <span>{todo.cont}</span> */}
          {todo.status === 'active' ? 
          <img src={activeSvg} /> :
          <img src={completeSvg} />}
          <img onClick={() => handleDelete(todo)} src={trashSvg} />
        </div>
      ))}
    </div>
  )
}

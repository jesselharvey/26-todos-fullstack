const express = require("express")
const app = express()
// const knex = require(knex())
// const axios = require("axios")
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    database: "todo_app",
  },
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const todoList = []
// const items = {
//   {
//     id: 1,
//     item: 'thing'.
//   },
//   {
//     id: 2,
//     item: 'thou'.
//   }

// }

app.get("/api/:id/todos", async (req, res) => {
  // knex.raw('select * from todos').then((resp) => {
  const todos = await knex.raw("select * from todos")
  const todo_rows = todos.rows
  res.json(todo_rows)
  // })
  // console.log()
})

app.post("/api/:id/todos", (req, res) => {
  const { id } = req.params
  knex
    .raw(`INSERT INTO todos (cont, status, user_id) VALUES (?, ?, ?)`, [
      req.body.content,
      req.body.status,
      id,
    ])
    .then((result) => {
      res.json(result.rows)
    })
  // const { cont } = req.body
  // console.log(req.body)
  res.json()
})

app.post("/api/:id", (req, res) => {
  // const { id } = req.params
  knex
    .raw(`INSERT INTO users (email) VALUES (?)`, [
      // id,
      req.body.email,
    ])
    .then((result) => {
      res.json(result.rows)
    })
  res.json()
})

// app.delete("/api/:id/todos", (req, res) => {
//   const {id} = req.params
//   if (req.body.user_id === id) {
//     knex.raw(`DELETE FROM todos WHERE `)
//   }
// })

// app.patch("/api/todo/:id", (req, res) => {
//   if (req.body.id === item.id) {
//     {
//       item, req.body
//     }
//   }
// })

app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})

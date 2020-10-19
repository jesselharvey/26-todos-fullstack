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

let todoList = []
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

app.get("/api/:id/todos", (req, res) => {
  const { id } = req.params
  // knex.raw('select * from todos').then((resp) => {
  // const todos = await knex.raw(`SELECT * FROM todos WHERE user_id=${req.params.id}`)
  knex
  .raw(`SELECT * FROM todos`)
  .then((result) => {
    console.log(result.rows)
    res.json(result.rows)
  })
  // .then((item) => {
  // console.log(item.rows)
  // return item.rows
  // const todo_rows = todos.rows
  // })
  // res.json(todos.rows)

  // for (let i = 0; i < todo_rows.length; i++) {
  // console.log(todo_rows)
  // res.json(todo_rows)
  // res.json({
  //   id: todo_rows.id,
  //   content: todo_rows.cont,
  //   status: todo_rows.status,
  // })
  // }
  // })
  // console.log()
})

// lets me get the users v v v
// app.get("/api/users", async (req, res) => {
//   const users = await knex.raw(`SELECT * FROM users`)
//   const user_rows = users.rows
//   res.json(user_rows)
// })

app.post("/api/:id/todos", (req, res) => {
  const { id } = req.params
  knex
    .raw(`INSERT INTO todos (cont, status, user_id) VALUES (?, ?, ?)`, [
      req.body.content,
      req.body.status,
      id,
    ])
    .then((result) => {
      // console.log(result.rows)
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

app.delete("/api/todos/:id", (req, res) => {
  // const { id } = req.params
  knex.raw(`DELETE FROM todos WHERE id=?`, [req.params.id]).then((result) => {
    res.json(result.rows)
  })
})

app.patch("/api/:id/todos", (req, res) => {
  // const { id } = req.params
  knex
    .raw(`UPDATE todos SET cont=?, status=? WHERE id=?`, [
      req.body.content,
      req.body.status,
      req.body.id,
    ])
    .then((result) => {
      res.json(result.rows)
    })
})

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

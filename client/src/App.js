import React from "react"
// import logo from "./logo.svg"
// import { Counter } from './features/counter/Counter';
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { TodosHome } from "./features/todos/todos"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id/todos">
          <TodosHome />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {

let todos=['Learn React','Build a React app','Deploy the React app']
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <TodoList  todos={todos} />
    </div>
  )
}

export default App

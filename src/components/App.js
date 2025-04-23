import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList.js";

const App = () => {
  const [todos, setTodos] = useState([
    { todo: "one", state: false },
    { todo: "two", state: false },
    { todo: "three", state: false },
  ]);
  
  
  function handleComplete(idx) {
    const updatedTodos = todos.map((todo, index) =>
      index === idx ? { ...todo, state: true } : todo
    );
    setTodos(updatedTodos);
  }
  
  return (
    <div>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
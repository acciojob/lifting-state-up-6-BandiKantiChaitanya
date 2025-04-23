import React, { useState } from "react";

function TodoList({ todos }) {
  const [completed, setCompleted] = useState([]);

  function handleComplete(index) {
    setCompleted((prevCompleted) => [...prevCompleted, index]);
  }

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => {
          if (completed.includes(index)) {
            return (
              <li key={index} data-testid={`todo-${index}`}>
                {todo} (Completed)
              </li>
            );
          }
          return (
            <li key={index} data-testid={`todo-${index}`}>
              {todo}
              <button
                onClick={() => handleComplete(index)}
                data-testid={`complete-button-${index}`}
              >
                Complete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

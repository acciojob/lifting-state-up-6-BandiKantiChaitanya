import React, { useState } from 'react';

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
          // Check if the current todo is marked as completed
          const isCompleted = completed.includes(index);

          return (
            <li key={index}>
              {todo}
              {/* Only render the button if the todo is not completed */}
              {isCompleted ? null : (
                <button
                  onClick={() => handleComplete(index)}
                  data-testid={`complete-button-${index}`}
                >
                  Complete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

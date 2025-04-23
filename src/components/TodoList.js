import React, { useState } from 'react';

function TodoList({ todos }) {
  const [completed, setCompleted] = useState([]);

  function handleComplete(index) {
    setCompleted([...completed, index]);
  }

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => {
          if (completed.includes(index)) {
            return <li key={index}>{todo} (Completed)</li>; // No button if completed
          }
          return (
            <li key={index}>
              {todo}
              <button
                onClick={() => handleComplete(index)}
                
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

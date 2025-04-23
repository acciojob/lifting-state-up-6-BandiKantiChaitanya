import React from 'react'
import { useState } from 'react';

function TodoList({todos}) {
    const [completed, setCompleted] = useState([]);
   function handleComplete(index){
        setCompleted([...completed,index])
    }
  return (
    <div>
        <h2>Child Component</h2>
        <ul>
        {todos.map((todo, index) => {
                    const isCompleted = completed.includes(index);
                    return (
                        <li key={index}>
                            {todo}
                            {!isCompleted && (
                                <button
                                    onClick={() => handleComplete(index)}
                                    data-testid={`complete-button-${index}`} // helpful for Cypress
                                >
                                    Complete
                                </button>
                            )}
                        </li>
                    );
                })}
            
        </ul>
    </div>
  )
}

export default TodoList
import React from 'react'
import { useState } from 'react';

function TodoList(props) {
    let list=props.todos
    const [completed, setCompleted] = useState([]);
   function handleComplete(index){
        setCompleted([...completed,index])
    }
  return (
    <div>
        <h2>Child Component</h2>
        <ul>
        {
                    list.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            {
                                completed.includes(index)
                                ? null
                                : <button onClick={() => handleComplete(index)}>Complete</button>
                            }
                        </li>
                    ))
                }
            </ul>
    </div>
  )
}

export default TodoList
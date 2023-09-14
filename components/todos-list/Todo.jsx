'use client'
import React from 'react'

function Todo({ item, deleteFuncTodo }) {
    return (
        <li>
            <p>{item}</p>
            <button onClick={() => deleteFuncTodo(item)}>
                <span className="material-symbols-outlined">delete</span>
            </button>
        </li>
    )
}

export default Todo

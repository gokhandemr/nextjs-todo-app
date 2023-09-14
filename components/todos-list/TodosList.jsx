'use client'
import React, { useEffect, useState } from 'react'
import styles from './TodoList.module.css'
import { todoStore } from '@/store'
import Todo from './Todo'

function TodosList() {
    const { todo, deleteTodo } = todoStore()
    const [isWindow, setIsWindow] = useState(false)

    useEffect(() => {
        setIsWindow(true)
    }, [])

    const deleteFuncTodo = (name) => {
        if (window.confirm('Görevi Silmek istediğinize emin misiniz?')) {
            const filterTodo = todo.filter(item => item !== name)
            deleteTodo(filterTodo)
            alert('Görev Silindi.')
        }
    }

    return (
        <div className={styles.todoList}>
            <ul>
                {isWindow && todo.length > 0
                    ? todo.map((item, index) => (
                        <Todo key={index} item={item} deleteFuncTodo={deleteFuncTodo} />
                    )) : <p className={styles.todoListText}>Henüz görev eklemediniz</p>
                }


            </ul>
        </div>
    )
}

export default TodosList

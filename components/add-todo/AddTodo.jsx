'use client'
import React from 'react'
import styles from './AddTodo.module.css'
import { todoStore } from '@/store/index'

function AddTodo() {
    const { value, addTodo, setValue } = todoStore()

    const formSubmit = (e) => {
        e.preventDefault()
        if (value !== '') {
            addTodo()
            setValue('')
        } else {
            alert('Lütfen ilgili alanı boş bırakmayın!')
        }
    }

    return (
        <form className={styles.form} onSubmit={e => formSubmit(e)}>
            <input placeholder='Yapılacak yeni bir şeyler yaz..' value={value} onChange={e => setValue(e.target.value)} />
            <button><span className="material-symbols-outlined">add_task</span></button>
        </form>
    )
}

export default AddTodo
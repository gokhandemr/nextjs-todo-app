'use client'
import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'
import { todoStore } from '@/store'
import Link from 'next/link'

function Footer() {
    const { todo, deleteTodo } = todoStore()
    const [isWindow, setIsWindow] = useState(false)

    useEffect(() => {
        setIsWindow(true)
    }, [])
    return (
        <footer className={styles.footer}>
            <p>toplam {isWindow && todo.length} adet</p>
            <div>
                <Link href={'#top'}>yukarı çık</Link>
                <button onClick={() => (deleteTodo([]))}>hepsini sil</button>
            </div>
        </footer>
    )
}

export default Footer

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const todoStore = create(
    persist(
        (set) => ({
            todo: [],
            value: '',
            addTodo: () => set((state) => ({ todo: [...state.todo, state.value] })),
            deleteTodo: (todo) => set(({ todo: todo })),
            setValue: (value) => set(({ value: value }))
        }),
        {
            name: 'todos', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)


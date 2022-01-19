import React from 'react'
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", [])

    const [searchValue, setSearch] = React.useState("")
    const [openModal, setOpenModal] = React.useState(false)

    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length


    let searchedTodos = []
    //en caso de que hayan escrito en el input
    if (!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })

    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text: text
        })
        saveTodos(newTodos)
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        /* newTodos[todoIndex] = {
          text: todoIndex[todoIndex].text, 
          completed: true,
        } */
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearch,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            addTodo,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider}
import React from 'react'
import "../styles/TodoCounter.css"
import { TodoContext } from './todoContext'


function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return (
        <>
            <h2 className='tittle'>Has completado {completedTodos}  de {totalTodos} TODOs</h2>
        </>
    )
}

export {TodoCounter}
import React from 'react'
import { TodoContext } from './todoContext'
import "../styles/TodoForm.css"

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("")
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onWrite = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    return (
        <form onSubmit={onSubmit}>
            {/* <label>Escribe tu Todo</label> */}
            <textarea
                value={newTodoValue}
                onChange={onWrite}
                placeholder='¿Que te gustaria hacer?'
            />
            <div>
                <button
                    className='form--cancel'
                    type='button'
                    onClick={onCancel}
                >
                    cancelar
                </button>
                <button
                    className='form--submit'
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}
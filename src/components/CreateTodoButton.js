import React from 'react'
import "../styles/CreateTodoButton.css"

function CreateTodoButton(props) {
    const createTask = () => {
        props.setOpenModal(prevState => !prevState)
    }

    return (
        <button
            className={`create--todo ${props.openModal && "creating--todo"}` }
            onClick={createTask}
        >
            +
        </button>
    )
}

export {CreateTodoButton}
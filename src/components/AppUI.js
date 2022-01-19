import React from 'react'
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoContext } from './todoContext';
import { Modal } from './modal';
import { TodoForm } from './TodoForm';

function AppUI() {
    const { error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <h3>Tuvimos un error</h3>}
                {loading && <div>
                    <h3 className='loading-1'>. . .</h3>
                </div>}
                {(!loading && !searchedTodos.length) && <h3>¡Crea tu primer Todo <br></br>pulsando el boton de <br>+</br>!</h3>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {/* Validamos si el open modal esta abierto o no */}
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </>
    )
}

export { AppUI }
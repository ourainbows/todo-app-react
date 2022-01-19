import React from 'react'
import "../styles/TodoList.css"

function TodoList(props) {
    return (
        <section className='list'>
            <ul className='list--cards'>
                {props.children}
            </ul>
        </section>       
    )
}

export {TodoList}
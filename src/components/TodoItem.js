import React from 'react'
import "../styles/TodoItem.css"

function TodoItem(props) {
    return (
        <li className='item'>
            <span
                className={`item--check ${props.completed && 
                    'check--active'}`}
                onClick={props.onComplete}
            >
                ✓
            </span>
            <p
                className={`item--p ${props.completed && 'item--p__completed'}`}
            >
                {props.text}
                
            </p>

            <span
                className="item--delete "
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem }
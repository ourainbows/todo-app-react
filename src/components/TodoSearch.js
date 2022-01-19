import React from 'react'
import "../styles/TodoSearch.css"
import { TodoContext } from './todoContext'

function TodoSearch() {
    const { searchValue, setSearch} = React.useContext(TodoContext)  
    const onSearchValueChange = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
            <div className='add--task--container'>
                <input
                    placeholder='Buscar tarea...'
                    onChange={onSearchValueChange}    
                    value={searchValue}
                />
            </div>
        </>
    )
}

export {TodoSearch}


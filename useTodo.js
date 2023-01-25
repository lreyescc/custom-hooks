import { useEffect, useReducer } from "react"
import {todoReducer} from '../08-useReducer/todoReducer'

const initialState = [
    JSON.parse(localStorage.getItem('todos'))
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    
    
    
    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatchTodo( action );
    }
    
    const handleDeleteTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload:id,
        })
        
    }
    
    const handleToggleTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload:id,
        })
        console.log( id );
    }

    const todosCount = () => {
        return todos.length
        
    }

    const pendingTodosCount = () => {
        return todos.filter(todos => todos.done != true).length
    }


  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo
  }
}
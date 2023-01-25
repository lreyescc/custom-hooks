export  const todoReducer = ( initialstate = [], action = {} ) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialstate, action.payload]
            //throw new error ('Action.type = ABC no está implementado');
            break;
        case '[TODO] Remove Todo':
            return initialstate.filter(todo => todo.id != action.payload)
            break;
        case '[TODO] Toggle Todo':
            return initialstate.map( todo => {
                if ( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
            break;
        default:
            return initialstate;
    }
}
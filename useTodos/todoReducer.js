

export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            if (initialState.find(todo => todo.description.toLowerCase() === action.payload.description.toLowerCase())) {
                alert('Ya existe una tarea con la misma descripción');
                return initialState;
            }
            else {
                return [...initialState, action.payload];
            }
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );
        case '[TODO] Toggle Todo':
            return initialState.map( todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo );
        case '[TODO] Reset Todo':
            return [];
        default:
            return initialState;
    }

};
import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch( action );
    };

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    };

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    };

    const handleResetTodos = () => {
        const action = {
            type: '[TODO] Reset Todo'
        };
        dispatch(action);
    };

    return {
        todos,
        init,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleResetTodos,
        countTodos: todos.length,
        doneTodos: todos.filter(todo => todo.done).length,
        pendingTodos: todos.filter(todo => !todo.done).length
    };

};
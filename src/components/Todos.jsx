import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    if (!Array.isArray(todos)) {
        return <div>Loading...</div>; // or handle the error state as needed
    }

    return (
        <div>
            Todos
            {todos.length > 0 ? (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos available.</p>
            )}
        </div>
    );
}

export default Todos;

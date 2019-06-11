import React from 'react';
import './Todos.css'

const Todos = ({ todos, deleteTodo }) => {

    const todoListView = todos.length > 0 ? (
        todos.map((todo) => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span className="todo" onClick={() => {
                        deleteTodo(todo.id)
                    }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p className="center">You have nothing to do! Get some rest</p>
        )


    return (
        <div className="todos collection">
            {todoListView}
        </div>
    )
}

export default Todos;
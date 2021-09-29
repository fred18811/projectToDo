import React from "react";

const ToDoItem = ({todo, deleteEl}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.user}</td>
            <td>{todo.project}</td>
            <td>{todo.text}</td>
            <td>
                <button onClick={() => deleteEl(todo.id, 'todo')} className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}

const ToDoList = ({todos, deleteEl}) => {
    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">user</th>
                    <th scope="col">project</th>
                    <th scope="col">text</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {todos.filter(todo => todo.isActive).map((todo) => {
                        return <ToDoItem key={todo.id}
                                         todo={todo}
                                         deleteEl={deleteEl}/>
                })}
                </tbody>
            </table>
            <a href="/todo/create" className="btn btn-success">Create TODO</a>
        </div>
    )
}

export default ToDoList
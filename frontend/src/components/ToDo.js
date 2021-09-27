import React from "react";

const ToDoItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.user}</td>
            <td>{todo.project}</td>
            <td>{todo.text}</td>
        </tr>
    )
}

const ToDoList = ({todos}) => {
    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">user</th>
                    <th scope="col">project</th>
                    <th scope="col">text</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => <ToDoItem todo={todo}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList
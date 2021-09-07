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
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>user</th>
                <th>project</th>
                <th>text</th>
            </tr>
            </thead>
            <tbody>
            {todos.map((todo) => <ToDoItem todo={todo}/>)}
            </tbody>
        </table>
    )
}

export default ToDoList
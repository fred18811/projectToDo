import React from "react";

const ToDOItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.user}</td>
            <td>{todo.project</td>
            <td>{todo.text}</td>
        </tr>
    )
}

const ToDOList = ({todos}) => {
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
            {todos.map((todo) => <ProjectItem todo={todo}/>)}
            </tbody>
        </table>
    )
}

export default ProjectList
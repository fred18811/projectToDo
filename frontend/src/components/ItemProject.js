import React from "react";
import { useParams } from 'react-router-dom';

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.url}</td>
            <td>{project.users}</td>
        </tr>
    )
}


const ItemProject = ({projects}) => {
    let { id } = useParams();
    let filtered_projects = projects.filter((project) => project.id === +id)

    return (
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>url</th>
                <th>users</th>
            </tr>
            </thead>
            <tbody>
            {filtered_projects.map((project) => <ProjectItem project={project} />)}
            </tbody>
        </table>
    )
}

export default ItemProject
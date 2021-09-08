import React from "react";
import {Link} from 'react-router-dom'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.id}</td>
            <Link to={`project/${project.id}`}>
                <td>{project.name}</td>
            </Link>
        </tr>
    )
}


const ProjectList = ({projects}) => {
    return (
        <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
            </tr>
            </thead>
            <tbody>
            {projects.map((project) => <ProjectItem project={project}/>)}
            </tbody>
        </table>
    )
}

export default ProjectList
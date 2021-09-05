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
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
            </tr>
            </thead>
            <tbody>
            {projects.map((project) => <ProjectItem project={project}/>)}
            </tbody>
        </table>
    )
}

export default ProjectList
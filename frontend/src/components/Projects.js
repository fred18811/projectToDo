import React from "react";
import {Link} from 'react-router-dom'


const ProjectItem = ({project, projectDelete}) => {
    return (
        <tr>
            <td>{project.id}</td>
            <td><Link to={`project/${project.id}`}>{project.name}</Link></td>
            <td>
                <button onClick={() => projectDelete(project.id)} className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}


const ProjectList = ({projects, projectDelete}) => {
    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {projects.map((project) => <ProjectItem key={project.id}
                                                        project={project}
                                                        projectDelete={projectDelete}/>)}
                </tbody>
            </table>
            <a href="/project/create" className="btn btn-success">Create Project</a>
        </div>
    )
}

export default ProjectList
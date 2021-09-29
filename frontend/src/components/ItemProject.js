import React from "react";
import {useParams} from 'react-router-dom';

const ItemProject = ({projects}) => {
    let {id} = useParams();

    let [filtered_projects] = [...projects.filter((project) => project.id === +id)]

    return (
        <div className="container">
            <h1 className="text-center mt-3">{filtered_projects ? filtered_projects.name : ''}</h1>
            <hr/>
            <a href={filtered_projects ? filtered_projects.url : ''}
               className="">{filtered_projects ? filtered_projects.url : ''}</a>
            <h4 className="mt-5 text-uppercase">Users</h4>
            {filtered_projects ? filtered_projects.users.map((user) => <p key={`user${user}`}>{user}</p>) : ''}
        </div>
    )
}

export default ItemProject
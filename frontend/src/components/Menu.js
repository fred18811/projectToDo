import React from "react";
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <menu>
            <li><Link to='/'>Users</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/todo'>ToDo</Link></li>
        </menu>
    )
}

export default Menu
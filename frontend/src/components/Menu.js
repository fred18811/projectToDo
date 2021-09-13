import React from "react";
import {Link} from 'react-router-dom'

const Menu = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">TODO Project</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link active" to='/'>Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/projects'>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/todo'>ToDo</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <li>
                    <Link className="nav-link" to='/login'>Login</Link>
                </li>
            </div>
        </nav>
    )
}

export default Menu
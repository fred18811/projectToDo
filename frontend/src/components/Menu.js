import React from "react";
import {Link} from 'react-router-dom'


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valDisplay: ''
        };
    }

    onChange(e) {
        if (this.state.valDisplay === 'block')
            this.setState({valDisplay: 'none'});
        else
            this.setState({valDisplay: 'block'});
    }

    render() {
        const style = {display: this.state.valDisplay};

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">TODO Project</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Переключатель навигации" onClick={() => this.onChange()}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={style}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/projects'>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/todo'>ToDo</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control mr-2" type="search" placeholder="Search"
                                   aria-label="Search">
                            </input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav">
                            <li>
                                <span className="nav-link active">{this.props.login}</span>
                            </li>
                            <li>
                                {this.props.auth ? <Link className="nav-link active" onClick={() => this.props.logout()}
                                                         to='/login'>Logout</Link> :
                                    <Link className="nav-link active" to='/login'>Login</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu
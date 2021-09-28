import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''}
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        this.props.getToken(this.state.username, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <br/>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="form-group">
                            <label htmlFor="login">Login</label>
                            <input className="form-control" id="login" type="text" name="username"
                                   onChange={(event) => this.handleChange(event)}/>
                            <label htmlFor="password">Password</label>
                            <input className="form-control" id="password" type="password" name="password"
                                   onChange={(event) => this.handleChange(event)}/>
                        </div>
                        <br/>
                        <input className="btn btn-dark" type="submit" value="Login"/>
                    </form>
            </div>
        );
    }


}

export default LoginForm
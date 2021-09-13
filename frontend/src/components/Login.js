import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' , password: ''}
    }

    handleChange(event)
    {
        this.setState({
           [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        console.log(this.state.username, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={(event)=>this.handleSubmit(event)}>
              <label htmlFor="login">Login</label>
              <input id="login" type="text" name="username" onChange={(event)=>this.handleChange(event)}/>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" onChange={(event)=>this.handleChange(event)}/>
              <input type="submit" value="Login" />
          </form>
        );
    }


}

export default LoginForm
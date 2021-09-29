import {useState} from "react";

const LoginForm = ({getToken}) => {
    const [auth, setAuth] = useState({username: '', password: ''})

    const handleChange = (e) => {
        setAuth({
            ...auth,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuth = {
            ...auth
        }
        getToken(newAuth)
        setAuth({username: '', password: ''})
    }


    return (
        <div className="container">
            <br/>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="login">Login</label>
                    <input className="form-control" id="login" type="text" name="username"
                           onChange={(e) => handleChange(e)}/>
                    <label htmlFor="password">Password</label>
                    <input className="form-control" id="password" type="password" name="password"
                           onChange={(e) => handleChange(e)}/>
                </div>
                <br/>
                <input className="btn btn-dark" type="submit" value="Login"/>
            </form>
        </div>
    );
}

export default LoginForm
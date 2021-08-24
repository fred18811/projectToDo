import React from "react";
import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users.js";
import axios from "axios";


const API_URL = 'http://localhost:8000/api/users/'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get(API_URL)
            .then(response => {
                const users = response.data;
                this.setState(
                    {'users': users}
                )
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <UserList users={this.state.users}/>
        )
    }
}

export default App;

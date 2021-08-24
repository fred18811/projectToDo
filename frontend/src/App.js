import React from "react";
import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        const users = [
            {
                "username": "User0",
                "first_name": "Tester0",
                "last_name": "Testerov0",
                "email": "test0@test.ru"
            },
            {
                "username": "User0",
                "first_name": "Tester0",
                "last_name": "Testerov0",
                "email": "test0@test.ru"
            },
        ]
        this.setState(
            {'users': users}
        )
    }

    render (){
        return(
            <UserList users={this.state.users}/>
        )
    }


}

export default App;

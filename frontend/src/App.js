import React from "react";
import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users.js";
import ProjectList from "./components/Projects.js";
import ToDoList from "./components/ToDo.js";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import axios from "axios";


const API_URL = 'http://localhost:8000/api/'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todos': []
        }
    }

    componentDidMount() {
        axios.get(`${API_URL}users/`)
            .then(response => {
                const users = response.data;
                this.setState(
                    {'users': users.results}
                )
            })
            .catch(error => console.log(error));
        axios.get(`${API_URL}projects/`)
            .then(response => {
                const projects = response.data;
                this.setState(
                    {'projects': projects.results}
                )
            })
            .catch(error => console.log(error));
        axios.get(`${API_URL}todo/`)
            .then(response => {
                const todos = response.data;
                this.setState(
                    {'todos': todos.results}
                )
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div id='content'>
                <Menu/>
                <UserList users={this.state.users}/>
                <ProjectList projects={this.state.projects}/>
                <ToDoList todos={this.state.todos}/>
                <Footer/>
            </div>
        )
    }
}

export default App;

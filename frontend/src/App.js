import React from "react";
import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users.js";
import ProjectList from "./components/Projects.js";
import ItemProject from "./components/ItemProject.js";
import ToDoList from "./components/ToDo.js";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import LoginForm from "./components/Login";
import NotFound404 from "./components/NotFound404.js";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';


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

    getToken(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log('Incorected login or password'))
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
            <div className="d-flex flex-column min-vh-100">
                <BrowserRouter>
                    <div className="wrapper flex-grow-1">
                        <Menu/>
                        <Switch>
                            <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                            <Route exact path='/login' component={() => <LoginForm getToken={(username, password) => this.getToken(username, password)}/>}/>
                            <Route exact path='/projects'
                                   component={() => <ProjectList projects={this.state.projects}/>}/>
                            <Route exact path='/project/:id'
                                   component={() => <ItemProject projects={this.state.projects}/>}/>
                            <Route exact path='/todo' component={() => <ToDoList todos={this.state.todos}/>}/>
                            <Route component={NotFound404}/>
                        </Switch>
                    </div>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

export default App;

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
import Cookies from "universal-cookie";


const URL = 'http://localhost:8000/'
const API_URL = `${URL}api/`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
            'token' : '',
            'login' : ''
        }
    }

    setToken(token) {
        const cookies = new Cookies();
        cookies.set('token', token);
        this.setState({'token': token}, () => this.loadData());
    }
    setLogin(login) {
        const cookies = new Cookies();
        cookies.set('login', login);
        this.setState({'login': login}, () => this.loadData());
    }

    getTokenFromStorage() {
    const cookies = new Cookies();
    const token = cookies.get('token');
    this.setState({'token': token}, ()=> this.loadData());
    }

    getLoginFromStorage() {
    const cookies = new Cookies();
    const login = cookies.get('login');
    this.setState({'login': login}, ()=> this.loadData());
    }

    getToken(username, password) {
        axios.post(`${URL}api-token-auth/`, {username: username, password: password})
            .then(response => {
                this.setLogin(username);
                this.setToken(response.data['token']);
            })
            .catch(error => console.log('Incorected login or password'))
    }

    isAuthenticated() {
        return this.state.token != ''
    }

    logout() {
        this.setToken('')
    }

    loadData() {
        const headers = this.getHeaders();
        axios.get(`${API_URL}users/`, {headers})
            .then(response => {
                const users = response.data;
                this.setState(
                    {'users': users.results}
                )
            })
            .catch(error => {
                console.log(error);
                this.setState({'user': []});
            });
        axios.get(`${API_URL}projects/`, {headers})
            .then(response => {
                const projects = response.data;
                this.setState(
                    {'projects': projects.results}
                )
            })
            .catch(error => {
                console.log(error);
                this.setState({'projects': []});
            });
        axios.get(`${API_URL}todo/`, {headers})
            .then(response => {
                const todos = response.data;
                this.setState(
                    {'todos': todos.results}
                )
            })
            .catch(error => {
                console.log(error);
                this.setState({'todos': []});
            });
    }

    getHeaders() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.isAuthenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    componentDidMount() {
        this.getTokenFromStorage();
        this.getLoginFromStorage();
    }

    render() {
        return (
            <div className="d-flex flex-column min-vh-100">
                <BrowserRouter>
                    <div className="wrapper flex-grow-1">
                        <Menu auth={this.isAuthenticated()} logout={()=>this.logout()} login={this.state.login}/>
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

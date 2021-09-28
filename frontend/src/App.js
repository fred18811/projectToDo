import React from "react";
import './App.css';
import UserList from "./components/Users.js";
import ProjectList from "./components/Projects.js";
import ProjectCreate from "./components/ProjectForm";
import ItemProject from "./components/ItemProject.js";
import ToDoList from "./components/ToDo.js";
import ToDoCreate from "./components/ToDoForm";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import LoginForm from "./components/Login";
import NotFound404 from "./components/NotFound404.js";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
            'token': '',
            'login': []
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
        this.setState({'token': token}, () => this.loadData());
    }

    getLoginFromStorage() {
        const cookies = new Cookies();
        const login = cookies.get('login');
        this.setState({'login': login}, () => this.loadData());
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
        return this.state.token !== ''
    }

    logout() {
        this.setToken('');
        this.setLogin('');
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

    projectDelete(id) {
        const headers = this.getHeaders();
        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`,
            {headers})
            .then(result => {
                this.setState({
                    projects: this.state.projects.filter((item) => item.id !== id)
                })
            })
            .catch(error => console.log(error))
    }

    projectCreate(newProject) {
        const headers = this.getHeaders();
        console.log(newProject.name, newProject.url, newProject.users)
        axios.post(`http://127.0.0.1:8000/api/projects/`,
            {name: newProject.name, url: newProject.url, users: []}, //Problem this users
            {headers})
            .then(result => {
                const newProject = result.data;
                this.setState({
                    projects: [...this.state.projects, newProject]
                })
            })
            .catch(error => console.log(error))
    }

    todoDelete(id) {
        const headers = this.getHeaders();
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}`,
            {headers})
            .then(result => {
                this.setState({
                    todos: this.state.todos.filter((item) => item.id !== id)
                })
            })
            .catch(error => console.log(error))
    }

    ToDoCreate(newToDo) {
        const headers = this.getHeaders();
        axios.post(`http://127.0.0.1:8000/api/todo/`,
            {project: newToDo.project, text: newToDo.text, user: newToDo.user},
            {headers})
            .then(result => {
                const newToDo = result.data;
                this.setState({
                    todos: [...this.state.todos, newToDo]
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="d-flex flex-column min-vh-100">
                <BrowserRouter>
                    <div className="wrapper flex-grow-1">
                        <Menu auth={this.isAuthenticated()} logout={() => this.logout()} login={this.state.login}/>
                        <Switch>
                            <Route exact path={'/'}>
                                <UserList users={this.state.users}/>
                            </Route>
                            <Route exact path='/login'>
                                <LoginForm getToken={(username, password) => this.getToken(username, password)}/>
                            </Route>
                            <Route exact path='/projects'>
                                <ProjectList projects={this.state.projects}
                                             projectDelete={(id) => this.projectDelete(id)}/>
                            </Route>
                            <Route exact path='/project/create'>
                                <ProjectCreate create={(newProject) => this.projectCreate(newProject)}
                                               usersList={this.state.users}/>
                            </Route>
                            <Route exact path='/project/:id'>
                                <ItemProject projects={this.state.projects}/>
                            </Route>
                            <Route exact path='/todo'>
                                <ToDoList todos={this.state.todos}
                                          todoDelete={(id) => this.todoDelete(id)}/>
                            </Route>
                            <Route exact path='/todo/create'>
                                <ToDoCreate create={(newToDo) => this.ToDoCreate(newToDo)}
                                            projectList={this.state.projects}
                                            loginUser={(this.state.users.filter(usersList => usersList.username === this.state.login))[0]}/>
                            </Route>
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

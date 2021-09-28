import {useState} from "react";


const ProjectCreate = ({create, usersList}) => {
    const [project, setProject] = useState({name: '', url: '', users: []})

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const newProject = {
            ...project
        }
        create(newProject)
        setProject({name: '', url: '', users: []})
    }

    return (
        <div className="container">
            <h1 className="text-center">Create Project</h1>
            <form action="" method="post">
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="projectName">Name Project</label>
                        <input id="projectName"
                               type="name"
                               name="name"
                               className="form-control"
                               onChange={e => setProject({...project, name: e.target.value})}
                        />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="projectUrl">Url</label>
                        <input id="projectUrl"
                               type="url"
                               name="url"
                               className="form-control"
                               onChange={e => setProject({...project, url: e.target.value})}
                        />
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="selectUsers">Users</label>
                    <select name="users"
                            className="form-select"
                            multiple
                            id="selectUsers"
                            onChange={e => setProject({
                                ...project,
                                users: [...e.target.selectedOptions].map(o => parseInt(o.value))
                            })}>
                        {usersList.map((user) => (
                            <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
                        ))}
                    </select>
                </div>
                <button onClick={handleOnSubmit} type="submit" className="btn btn-primary mt-1">Sign in</button>
            </form>
        </div>
    )
}

export default ProjectCreate
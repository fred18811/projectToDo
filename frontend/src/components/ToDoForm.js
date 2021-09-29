
const ToDoCreate = ({create, projectList, loginUser}) => {

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            user: parseInt(loginUser.id),
            project: parseInt(document.querySelector('option:checked').value),
            text: document.querySelector('#projectText').value
        }
        create(newTodo, 'todo')
    }

    return (
        <div className="container">
            <h1 className="text-center">Create TODO</h1>
            <form action="" method="post">
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="user">Users</label>
                        <input id="user"
                               name="user"
                               readOnly={true}
                               value={loginUser ? `${loginUser.firstName} ${loginUser.lastName}` : ''}
                               className="form-control"
                        />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="selectProject">Name Project</label>
                        <select name="project"
                                className="form-select"
                                id="selectProject">
                            {projectList.map((project) => (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group mb-3">

                    <label htmlFor="projectText">Text</label>
                    <textarea id="projectText"
                              name="text"
                              className="form-control"
                    />
                </div>
                <button onClick={handleOnSubmit} type="submit" className="btn btn-primary mt-1">Create</button>
            </form>
        </div>
    )
}

export default ToDoCreate
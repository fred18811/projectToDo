import React from "react";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Login</th>
                    <th scope="col">Firest name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => <UserItem key={user.id} user={user}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default UserList
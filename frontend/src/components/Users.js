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
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>Login</th>
                <th>Firest name</th>
                <th>Last name</th>
                <th>email</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => <UserItem user={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList
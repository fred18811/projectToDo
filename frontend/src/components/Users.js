import React from "react";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <thead>
            <tr>
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
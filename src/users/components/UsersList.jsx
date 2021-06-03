import React from 'react'

export const UsersList = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <table className="table w-100">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map(u => <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td><button className="btn btn-dark" onClick={() => props.setSelected(u.id)}>Show Tasks</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

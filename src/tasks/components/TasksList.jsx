import React from 'react'

export const TasksList = (props) => {
    return (
        <div>
            <table className="table w-100">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(task => <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                        <td>{(new Date(task.createdAt)).toLocaleDateString()}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

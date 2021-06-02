import React from 'react'
import { useHistory } from 'react-router'

export const TasksList = (props) => {
    const { push } = useHistory()


    const onGoToDetails = (taskId) => {
        push('/tasks/' + taskId + '/')
    }

    return (
        <div className="card">
            <div className="card-body">
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
                            <td><button className="btn btn-dark" onClick={() => onGoToDetails(task.id)}>Details</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

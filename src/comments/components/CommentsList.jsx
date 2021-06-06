import React from 'react'

export const CommentsList = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <table className="table w-100">
                    <thead>
                        <tr>
                            <th>Content</th>
                            <th>Created</th>
                            <th>Author</th>
                            {!props.isTaskDetails && <th>Related Task</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {props.comments.map(c => <tr key={c.id}>
                            <td>{c.content}</td>
                            <td>{(new Date(c.createdAt)).toLocaleDateString()}</td>
                            <td>{c.userId.name}</td>
                            {!props.isTaskDetails && <td>{c.taskId.title}</td>}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

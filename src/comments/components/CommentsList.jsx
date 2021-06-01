import React from 'react'

export const CommentsList = (props) => {
    return (
        <div>
            <table className="table w-100">
                <thead>
                    <tr>
                        <th>Content</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {props.comments.map(c => <tr key={c.id}>
                        <td>{c.content}</td>
                        <td>{(new Date(c.createdAt)).toLocaleDateString()}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router'
import { taskDetailsLoadStart, selectTasks } from '../../core/reducers/TasksReducer'
import { commentsLoadForTask, selectComments, addComment } from '../../core/reducers/CommentsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { TasksList } from '../../tasks/components/TasksList'
import { CommentsList } from '../../comments/components/CommentsList'
import { AddCommentForm } from '../../comments/components/AddCommentForm'
import { selectLoggedUser } from '../../core/reducers/UsersReducer'
import { useHistory } from 'react-router'

export const TaskDetails = () => {
    const { push } = useHistory()
    const dispatch = useDispatch()
    const { taskId } = useParams()
    const comments = useSelector(selectComments)
    const tasks = useSelector(selectTasks)
    const [showCommentForm, setShowCommentForm] = useState(false)
    const loggedUser = useSelector(selectLoggedUser)


    useEffect(() => {
        if (loggedUser) {
            dispatch(taskDetailsLoadStart(taskId))
            dispatch(commentsLoadForTask(taskId))
        }
        else {
            push('/login')
        }

    }, [comments])

    const onAddComment = (data) => {
        const draft = {
            id: (~~(Math.random() * Date.now())).toString(),
            userId: loggedUser.id,
            taskId: taskId,
            createdAt: Date.now(),
            content: data.content,
        }
        dispatch(addComment(draft))
        setShowCommentForm(false)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4>Task Details</h4>
                        {<TasksList tasks={tasks} isTaskDetails={true} />}
                    </div>
                    {comments.length > 0 &&
                        <div className="col-sm">
                            <h4>Comments</h4>
                            {<CommentsList comments={comments} isTaskDetails={true} />}
                            {!showCommentForm && <button className="btn btn-lg btn-success btn-block" style={{ width: "160px", marginTop: "10px" }} onClick={() => { setShowCommentForm(!showCommentForm) }}>Add comment</button>}
                            {showCommentForm && <AddCommentForm onAdd={onAddComment} />}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

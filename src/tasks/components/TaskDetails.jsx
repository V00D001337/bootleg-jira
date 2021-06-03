import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { taskDetailsLoadStart, selectTasks } from '../../core/reducers/TasksReducer'
import { commentsLoadForTask, selectComments } from '../../core/reducers/CommentsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { TasksList } from '../../tasks/components/TasksList'
import { CommentsList } from '../../comments/components/CommentsList'

export const TaskDetails = () => {
    const dispatch = useDispatch()
    const { taskId } = useParams()
    const comments = useSelector(selectComments)
    const tasks = useSelector(selectTasks)


    useEffect(() => {
        dispatch(taskDetailsLoadStart(taskId))
        dispatch(commentsLoadForTask(taskId))
    }, [])


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
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

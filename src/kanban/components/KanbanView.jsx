import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tasksLoadStart, selectTasksNew, selectTasksInProgress, selectTasksReview, selectTasksDone } from '../../core/reducers/TasksReducer'
import { TasksList } from '../../tasks/components/TasksList'

export const KanbanView = () => {
    const dispatch = useDispatch()
    const tasksNew = useSelector(selectTasksNew)
    const tasksInProgress = useSelector(selectTasksInProgress)
    const tasksReview = useSelector(selectTasksReview)
    const tasksDone = useSelector(selectTasksDone)


    useEffect(() => {
        dispatch(tasksLoadStart())
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4>New Tasks</h4>
                        <TasksList tasks={tasksNew} />
                    </div>
                    <div className="col-sm">
                        <h4>Tasks In Progress</h4>
                        <TasksList tasks={tasksInProgress} />
                    </div>
                    <div className="col-sm">
                        <h4>Tasks in Review</h4>
                        <TasksList tasks={tasksReview} />
                    </div>
                    <div className="col-sm">
                        <h4>Done Tasks</h4>
                        <TasksList tasks={tasksDone} />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectLoggedUser } from '../../core/reducers/UsersReducer';
import { selectTasks, tasksLoadByUserIdStart, tasksLoad20NewestStart, selectUsersTasks } from '../../core/reducers/TasksReducer'
import { commentsLoad20NewestStart, selectComments } from '../../core/reducers/CommentsReducer'
import { useHistory } from 'react-router'
import { NavBar } from '../components/NavBar';
import { TasksList } from '../../tasks/components/TasksList'
import { CommentsList } from '../../comments/components/CommentsList'

export const MainPageContainer = () => {
    const dispatch = useDispatch()
    const { push } = useHistory()
    const user = useSelector(selectLoggedUser)
    const usersTasks = useSelector(selectUsersTasks)
    const newestTasks = useSelector(selectTasks)
    const comments = useSelector(selectComments)

    useEffect(() => {
        dispatch(tasksLoadByUserIdStart(user.id))
        dispatch(tasksLoad20NewestStart())
        dispatch(commentsLoad20NewestStart())
    }, [])

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1>{'Witaj ' + user.name}</h1>
                <div className="row">
                    <div className="col-sm">
                        <h4>My Tasks</h4>
                        {<TasksList tasks={usersTasks} />}
                    </div>
                    <div className="col-sm">
                        <h4>Newest Tasks</h4>
                        {<TasksList tasks={newestTasks} />}
                    </div>
                    <div className="col-sm">
                        <h4>Newest Comments</h4>
                        {<CommentsList comments={comments}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

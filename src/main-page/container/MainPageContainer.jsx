import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectLoggedUser } from '../../core/reducers/UsersReducer';
import {selectTasks, tasksLoadByUserIdStart, tasksLoad20NewestStart, tasksLoadStart, selectUsersTasks} from '../../core/reducers/TasksReducer'
import { useHistory } from 'react-router'
import { NavBar } from '../components/NavBar';
import {TasksList} from '../../tasks/components/TasksList'

export const MainPageContainer = () => {
    const dispatch = useDispatch()
    const { push } = useHistory()
    const user = useSelector(selectLoggedUser)
    const usersTasks = useSelector(selectUsersTasks)
    const newestTasks = useSelector(selectTasks)

    useEffect(() => {
        dispatch(tasksLoadByUserIdStart(user.id))
        dispatch(tasksLoad20NewestStart())
    }, [])

    return (
        <div>
            <NavBar />
            <h1>{'Witaj ' + user.name}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4>My Tasks</h4>
                        {<TasksList tasks={usersTasks}/>}
                    </div>
                    <div className="col-sm">
                        <h4>Newest Tasks</h4>
                        {<TasksList tasks={newestTasks}/>}
                    </div>
                    <div className="col-sm">
                        najnowsze komentarze (po created at)
                    </div>
                </div>
            </div>
        </div>
    )
}

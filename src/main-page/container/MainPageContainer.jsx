import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectLoggedUser } from '../../core/reducers/UsersReducer';
import {selectTasks, tasksLoadByUserId, tasksLoadStart} from '../../core/reducers/TasksReducer'
import { useHistory } from 'react-router'
import { NavBar } from '../components/NavBar';
import {TasksList} from '../../tasks/components/TasksList'

export const MainPageContainer = () => {
    const dispatch = useDispatch()
    const { push } = useHistory()
    const user = useSelector(selectLoggedUser)
    const tasks = useSelector(selectTasks)

    useEffect(() => {
        dispatch(tasksLoadByUserId(user.id))
    }, [])

    return (
        <div>
            <NavBar />
            {'Witaj ' + user.name}
            <div className="container">
                <h2>My Tasks</h2>
                <div className="row">
                    <div className="col-sm">
                        {<TasksList tasks={tasks}/>}
                    </div>
                    <div className="col-sm">
                        najnowsze zadania (z15 po created at)
                    </div>
                    <div className="col-sm">
                        najnowsze komentarze (po created at)
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {TasksList} from '../components/TasksList'
import {selectTasks, tasksLoadStart} from '../../core/reducers/TasksReducer'


export const TasksContainer = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(selectTasks)


    useEffect(() => {
        dispatch(tasksLoadStart())
    }, [])

    return (
        <div>
            <TasksList tasks={tasks}/>
        </div>
    )
}

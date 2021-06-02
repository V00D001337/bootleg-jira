import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { taskDetailsLoadStart } from '../../core/reducers/TasksReducer'
import { useDispatch, useSelector } from 'react-redux'

export const TaskDetails = () => {
    const dispatch = useDispatch()
    const { taskId } = useParams()

    useEffect(() => {
        //FETCH COMMENTS WHERE TASK_ID
        dispatch(taskDetailsLoadStart(taskId))
    }, [])


    return (
        <div>
            {/* PRINT DETAILS + COMMENTS*/}
        </div>
    )
}

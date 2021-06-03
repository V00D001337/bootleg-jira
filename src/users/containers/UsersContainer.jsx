import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UsersList } from '../components/UsersList'
import { selectUsers, usersLoadStart } from '../../core/reducers/UsersReducer'
import { tasksLoadByUserIdStart, selectUsersTasks } from '../../core/reducers/TasksReducer'
import { TasksList } from '../../tasks/components/TasksList'


export const UsersContainer = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)
    const [selectedUserId, setSelectedUserId] = useState(undefined)
    const usersTasks = useSelector(selectUsersTasks)


    useEffect(() => {
        dispatch(usersLoadStart())
    }, [])

    useEffect(() => {
        if (selectedUserId)
            dispatch(tasksLoadByUserIdStart(selectedUserId))
        else
            return
    }, [selectedUserId])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4>Users</h4>
                        <UsersList users={users} setSelected={setSelectedUserId} />
                    </div>
                    {selectedUserId &&
                        <div className="col-sm">
                            <h4>Users Tasks</h4>
                            <TasksList tasks={usersTasks} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

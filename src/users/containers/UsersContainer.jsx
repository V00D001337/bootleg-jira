import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {UsersList} from '../components/UsersList'
import {selectUsers, usersLoadStart} from '../../core/reducers/UsersReducer'


export const UsersContainer = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)


    useEffect(() => {
        dispatch(usersLoadStart())
    }, [])

    return (
        <div>
            <UsersList users={users}/>
        </div>
    )
}

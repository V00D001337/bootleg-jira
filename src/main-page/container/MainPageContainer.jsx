import React, {useEffect} from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectLoggedUser } from '../../core/reducers/UsersReducer';
import { useHistory } from 'react-router'
import { NavBar } from '../components/NavBar';

export const MainPageContainer = () => {
    const { push } = useHistory()
    const user = useSelector(selectLoggedUser)
    return (
        <div>
            <NavBar/>
            {'Witaj ' + user.name}
        </div>
    )
}

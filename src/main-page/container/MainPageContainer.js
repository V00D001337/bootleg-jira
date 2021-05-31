import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'

export const MainPageContainer = () => {
    const user = useSelector((state) => state.users.loggedUser)
    return (
        <div>
            {'Hello!' + user.name}
        </div>
    )
}

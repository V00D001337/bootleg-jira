import React from 'react'
import { store } from '../../store'

export const MainPageContainer = () => {
    return (
        <div>
            {'Hello!' + store.getState.users}
        </div>
    )
}

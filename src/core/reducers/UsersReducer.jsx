const initialState = {
    users: [],
    loggedUser: undefined,
    message: '',
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_LOAD_START': {
            return {
                ...state, isLoading: true
            }
        }
        case 'USERS_LOAD_SUCCESS': {
            return {
                ...state, users: action.payload.users, isLoading: false
            }
        }
        case 'USERS_LOAD_FAILED': {
            return {
                ...state, isLoading: false, message: "Users Load Failed"
            }
        }
        case 'USERS_NEW':
            return {
                ...state, users: [...state.users, action.payload.user], loggedUser: action.payload.user
            }
        case 'USERS_LOGIN':
            {
                const user = action.payload.user
                const match = state.users.find(u => u.email === user.email && u.password === user.password)
                if (match) {
                    return { ...state, message: '', loggedUser: match }
                }
                else {
                    return { ...state, message: 'Login Failed' }
                }
            }
        default: return state
    }
}
export default reducer

export const usersNew = (user) => {
    return ({ type: 'USERS_NEW', payload: { user } })
}

export const usersLoadStart = () => {
    return ({ type: 'USERS_LOAD_START' })
}

export const usersLoadFailed = () => {
    return ({ type: 'USERS_LOAD_FAILED' })
}

export const usersLoadSuccess = (users) => {
    return ({ type: 'USERS_LOAD_SUCCESS', payload: { users } })
}

export const usersLogin = (user) => {
    return ({ type: 'USERS_LOGIN', payload: { user } })
}



//Selectors

export const selectUsers = (state) => state.users.users
export const selectLoggedUser = (state) => state.users.loggedUser
export const selectLoginMessage = (state) => state.users.message
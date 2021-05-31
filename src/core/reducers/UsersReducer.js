const initialState = {
    users: [],
    loggedUser: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_LOAD':
            return {
                ...state, users: action.payload.users
            }
        case 'USERS_NEW':
            return {
                ...state, users: [...state.users, action.payload.user]
            }
        case 'USERS_LOG':
            {
                const user = action.payload.user
                const match = state.users.find(u => u.email === user.email && u.password === user.password)
                if (match){
                    console.log("ye");
                    return { ...state, loggedUser: match }
                }
                else return {
                    state
                }
            }

        default: return state
    }
}
export default reducer

export const usersNew = (user) => {
    return ({ type: 'USERS_NEW', payload: { user } })
}

export const usersLoad = (users) => {
    return ({ type: 'USERS_LOAD', payload: { users } })
}

export const usersLog = (user) => {
    return ({ type: 'USERS_LOG', payload: { user } })
}
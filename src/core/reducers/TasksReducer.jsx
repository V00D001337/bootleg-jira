const initialState = {
    tasks: [],
    usersTasks: [],
    message: '',
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TASKS_LOAD_START':
            return {
                ...state, isLoading: true
            }
        case 'TASKS_LOAD_SUCCESS':
            return {
                ...state, tasks: action.payload.tasks, isLoading: false
            }
        case 'TASKS_LOAD_FAILED':
            return {
                ...state, isLoading: false, message: 'Tasks loading failed'
            }
        case 'TASKS_LOAD_BY_USER_ID_START': {
            return {
                ...state, isLoading: true
            }
        }
        case 'TASKS_LOAD_BY_USER_ID_SUCCESS': {
            return {
                ...state, usersTasks: action.payload.usersTasks, isLoading: false
            }
        }
        case 'TASKS_LOAD_20_NEWEST_START': {
            return {
                ...state, isLoading: true 
            }
        }
        default: return state
    }
}
export default reducer

export const tasksLoadStart = () => {
    return ({ type: 'TASKS_LOAD_START' })
}

export const tasksLoad20NewestStart = () => {
    return ({ type: 'TASKS_LOAD_20_NEWEST_START' })
}

export const tasksLoadSuccess = (tasks) => {
    return ({ type: 'TASKS_LOAD_SUCCESS', payload: { tasks } })
}

export const tasksLoadFailed = () => {
    return ({ type: 'TASKS_LOAD_FAILED' })
}

export const tasksLoadByUserIdStart = (userId) => {
    return ({type: 'TASKS_LOAD_BY_USER_ID_START', payload: {userId}})
}

export const tasksLoadByUserIdSuccess = (usersTasks) => {
    return ({ type: 'TASKS_LOAD_BY_USER_ID_SUCCESS', payload: { usersTasks } })
}

export const selectTasks = (state) => state.tasks.tasks
export const selectUsersTasks = (state) => state.tasks.usersTasks

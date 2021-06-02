const initialState = {
    tasks: [],
    usersTasks: [],
    message: '',
    isLoading: false,
    sprints: [],
    users: []
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
        case 'TASKS_LOAD_USERS': {
            return {
                ...state, users: action.payload.users
            }
        }
        case 'TASKS_LOAD_SPRINTS': {
            return {
                ...state, sprints: action.payload.sprints
            }
        }
        case 'TASK_DETAILS_LOAD_START': {
            return {
                ...state, isLoading: true
            }
        }
        case 'TASK_DETAILS_LOAD_SUCCESS': {
            const tasks = action.payload.tasks.map(t => {
                t.userId = state.users.find(u => u.id === t.userId) || '';
                t.sprintId = state.sprints.find(s => s.id === t.sprintId) || '';
                return t;
            })
            return {
                ...state, tasks: tasks
            }
        }
        default: return state
    }
}
export default reducer

export const taskDetailsLoadStart = (taskId) => {
    return ({ type: 'TASK_DETAILS_LOAD_START', payload: { taskId } })
}

export const taskDetailsLoadSuccess = (tasks) => {
    return ({ type: 'TASK_DETAILS_LOAD_SUCCESS', payload: { tasks } })
}

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
    return ({ type: 'TASKS_LOAD_BY_USER_ID_START', payload: { userId } })
}

export const tasksLoadByUserIdSuccess = (usersTasks) => {
    return ({ type: 'TASKS_LOAD_BY_USER_ID_SUCCESS', payload: { usersTasks } })
}

export const tasksLoadUsers = (users) => {
    return ({ type: 'TASKS_LOAD_USERS', payload: { users } })
}

export const tasksLoadSprints = (sprints) => {
    return ({ type: 'TASKS_LOAD_SPRINTS', payload: { sprints } })
}

export const selectTasks = (state) => state.tasks.tasks
export const selectUsersTasks = (state) => state.tasks.usersTasks
export const selectTasksNew = (state) => state.tasks.tasks.filter(t => t.status === 'new')
export const selectTasksInProgress = (state) => state.tasks.tasks.filter(t => t.status === 'inprogress')
export const selectTasksReview = (state) => state.tasks.tasks.filter(t => t.status === 'review')
export const selectTasksDone = (state) => state.tasks.tasks.filter(t => t.status === 'done')
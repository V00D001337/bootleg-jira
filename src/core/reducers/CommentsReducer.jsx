const initialState = {
    comments: [],
    message: '',
    isLoading: false,
    users: [],
    tasks: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMMENTS_LOAD_START':
            return {
                ...state, isLoading: true
            }
        case 'COMMENTS_LOAD_SUCCESS':
            {
                const comments = action.payload.comments.map(c => {
                    c.userId = state.users.find(u => u.id === c.userId) || '';
                    c.taskId = state.tasks.find(t => t.id === c.taskId) || '';
                    return c;
                })
                return {
                    ...state,
                    comments: comments,
                    isLoading: false
                }
            }
        case 'COMMENTS_LOAD_FAILED':
            return {
                ...state, isLoading: false, message: 'Comments loading failed'
            }
        case 'COMMENTS_LOAD_20_NEWEST_START':
            return {
                ...state, isLoading: true
            }
        case 'LOAD_USERS': {
            return {
                ...state, users: action.payload.users
            }
        }
        case 'LOAD_TASKS': {
            return {
                ...state, tasks: action.payload.tasks
            }
        }
        case 'COMMENTS_LOAD_FOR_TASK': {
            return {
                ...state, isLoading: true
            }
        }
        default: return state
    }
}
export default reducer

export const commentsLoadStart = () => {
    return ({ type: 'COMMENTS_LOAD_START' })
}

export const commentsLoadSuccess = (comments) => {
    return ({ type: 'COMMENTS_LOAD_SUCCESS', payload: { comments } })
}

export const commentsLoadFailed = () => {
    return ({ type: 'COMMENTS_LOAD_FAILED' })
}

export const commentsLoad20NewestStart = () => {
    return ({ type: 'COMMENTS_LOAD_20_NEWEST_START' })
}

export const commentsLoadUsers = (users) => {
    return ({ type: 'LOAD_USERS', payload: { users } })
}

export const commentsLoadTasks = (tasks) => {
    return ({ type: 'LOAD_TASKS', payload: { tasks } })
}

export const commentsLoadForTask = (taskId) => {
    return ({ type: 'COMMENTS_LOAD_FOR_TASK', payload: { taskId } })
}

export const selectComments = (state) => state.comments.comments
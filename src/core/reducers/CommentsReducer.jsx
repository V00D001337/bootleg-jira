const initialState = {
    comments: [],
    message: '',
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMMENTS_LOAD_START':
            return {
                ...state, isLoading: true
            }
        case 'COMMENTS_LOAD_SUCCESS':
            return {
                ...state, comments: action.payload.comments, isLoading: false
            }
        case 'COMMENTS_LOAD_FAILED':
            return {
                ...state, isLoading: false, message: 'Comments loading failed'
            }
        case 'COMMENTS_LOAD_20_NEWEST_START':
            return {
                ...state, isLoading: true
            }
        default: return state
    }
}
export default reducer

export const commentsLoadStart = () => {
    return ({type: 'COMMENTS_LOAD_START'})
}

export const commentsLoadSuccess = (comments) => {
    return ({type: 'COMMENTS_LOAD_SUCCESS', payload: {comments} })
}

export const commentsLoadFailed = () => {
    return ({type: 'COMMENTS_LOAD_FAILED'})
}

export const commentsLoad20NewestStart = () => {
    return ({type: 'COMMENTS_LOAD_20_NEWEST_START'})
}

export const selectComments = (state) => state.comments.comments
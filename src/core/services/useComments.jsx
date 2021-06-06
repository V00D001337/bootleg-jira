import axios from "axios"

export const fetch20NewestComments = () => {
    return axios.get('http://localhost:8000/comments?_sort=createdAt&_order=desc&_limit=20').then(res => res.data)
}

export const fetchCommentsForTask = (taskId) => {
    return axios.get('http://localhost:8000/comments?taskId='+taskId+'&_sort=createdAt').then(res => res.data)
}

export const newComment = (comment) => {
    debugger
    return axios.post('http://localhost:8000/comments', {
        id: comment.id,
        userId: comment.userId,
        taskId: comment.taskId,
        createdAt: comment.createdAt,
        content: comment.content
    })
}
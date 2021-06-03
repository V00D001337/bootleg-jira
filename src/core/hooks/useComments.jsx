import axios from "axios"

export const fetch20NewestComments = () => {
    return axios.get('http://localhost:8000/comments?_sort=createdAt&_order=desc&_limit=20').then(res => res.data)
}

export const fetchCommentsForTask = (taskId) => {
    return axios.get('http://localhost:8000/comments?taskId='+taskId+'&_sort=createdAt').then(res => res.data)
}
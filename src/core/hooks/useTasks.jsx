import axios from "axios"

export const fetchUserTasks = (userID) => {
    return axios.get('http://localhost:8000/tasks?userId=' + userID).then(res => res.data)
}

export const fetchTaskWithId = (taskId) => {
    return axios.get('http://localhost:8000/tasks?id=' + taskId).then(res => res.data)
}

export const fetchTasks = () => {
    return axios.get('http://localhost:8000/tasks').then(res => res.data)
}

export const fetchNewestTasks = () => {
    return axios.get('http://localhost:8000/tasks?_sort=createdAt&_order=desc').then(res => res.data)
}

export const fetch20NewestTasks = () => {
    return axios.get('http://localhost:8000/tasks?_sort=createdAt&_order=desc&_limit=20').then(res => res.data)
}
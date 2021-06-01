import axios from "axios"

export const fetchUserTasks = (userID) => {
    return axios.get('http://localhost:8000/tasks?userId=' + userID).then(res => res.data)
}

export const fetchTasks = () => {
    return axios.get('http://localhost:8000/tasks').then(res => res.data)
}
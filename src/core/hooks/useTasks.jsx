import axios from "axios"

export const fetchUserTasks = (userID) => {
    return axios.get('http://localhost:8000/tasks?userId=' + userID)
}
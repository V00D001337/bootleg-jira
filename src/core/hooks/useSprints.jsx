import axios from "axios"

export const fetchSprints = () => {
    return axios.get('http://localhost:8000/sprints').then(res => res.data)
}
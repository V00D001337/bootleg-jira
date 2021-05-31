import axios from "axios"

export const newUser = (user) => {
    axios.post("http://localhost:8000/users", {
        id: (~~(Math.random() * Date.now())).toString(),
        name: user.name,
        email: user.email,
        password: user.password
    })
}
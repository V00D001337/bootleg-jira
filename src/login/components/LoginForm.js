import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { usersLoad, usersLog } from '../../core/reducers/UsersReducer';



export const LoginForm = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        dispatch(usersLog(data)); 
        push('/mainPage')};
    const { push } = useHistory()

    useEffect(() => {
        fetch("http://localhost:8000/users")
        .then(res => {return res.json()})
        .then(res => dispatch(usersLoad(res)))
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input {...register("email")} className="form-control" type="text" id="emailInput" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input {...register("password")} className="form-control" type="password" id="passwordInput" />
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
            <button className="btn btn-success" onClick={() => push('/register')}>Sign up</button>
        </div>
    )
}

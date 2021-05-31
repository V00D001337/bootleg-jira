import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { usersLoad, usersLogin, selectLoggedUser, selectLoginMessage } from '../../core/reducers/UsersReducer';
import { fetchUsers } from '../../core/hooks/useUsers';



export const LoginForm = () => {
    const dispatch = useDispatch()
    const loginMessage = useSelector(selectLoginMessage)
    const loggedUser = useSelector(selectLoggedUser)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => login(data)
    const { push } = useHistory()

    const login = (data) => {
        dispatch(usersLogin(data))
    }

    useEffect(() => {
        if (loggedUser !== undefined){
            push('/mainPage')
        } else {
            return
        }
    }, [loggedUser])

    useEffect(() => {
        fetchUsers()
            .then(res => dispatch(usersLoad(res)))
    }, [])

    return (
        <div>
            <small className="text-danger">
                {loginMessage}
            </small>
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

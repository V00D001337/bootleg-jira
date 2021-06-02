import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { usersLoadStart, usersLogin, selectLoggedUser, selectLoginMessage } from '../../core/reducers/UsersReducer';
import styled from 'styled-components'



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
        if (loggedUser !== undefined) {
            push('/mainPage')
        } else {
            return
        }
    }, [loggedUser])

    useEffect(() => {
        dispatch(usersLoadStart())
    }, [])

    return (
        <FormContainer>
            <small className="text-danger">
                {loginMessage}
            </small>
            <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input {...register("email")} className="form-control" type="text" id="emailInput" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input {...register("password")} className="form-control" type="password" id="passwordInput" />
                </div>
                <button type="submit" style={{ width: "160px", marginTop: "10px" }} className="btn btn-lg btn-primary btn-block">Log in</button>
            </form>
            <button className="btn btn-lg btn-light btn-block" style={{ width: "160px", marginTop: "10px" }} onClick={() => push('/register')}>Sign up</button>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    width: 400px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

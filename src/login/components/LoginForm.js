import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="loginInput">Email address</label>
                    <input {...register("login")} className="form-control" type="text" id="loginInput" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input {...register("password")} className="form-control" type="password" id="passwordInput" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <button className="btn btn-success">Sign up</button>
        </div>
    )
}

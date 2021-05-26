import React from 'react'
import { useForm } from 'react-hook-form'

export const RegisterForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="nameInput">Name</label>
                    <input {...register("name")} className="form-control" type="text" id="nameInput" />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input {...register("email")} className="form-control" type="text" id="emailInput" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input {...register("password")} className="form-control" type="password" id="passwordInput" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { newUser } from '../../core/hooks/useUsers';
import { usersNew, usersLoad } from '../../core/reducers/UsersReducer';
import { useHistory } from 'react-router'
import { fetchUsers } from '../../core/hooks/useUsers';

export const RegisterForm = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { push } = useHistory()
    const onSubmit = data => {
        newUser(data)
        dispatch(usersNew(data))
        push('/mainPage')
    };

    useEffect(() => {
        fetchUsers()
            .then(res => dispatch(usersLoad(res)))
    }, [])
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="nameInput">Name</label>
                    <input {...register("name", {
                        required: "Name is required"
                    }
                    )} className="form-control" type="text" id="nameInput" />
                    {errors.name && <small className="text-danger">
                        {errors.name.message}
                    </small>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input {...register("email", {
                        required: "Email required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                        className="form-control" type="text" id="emailInput" />
                    {errors.email && <small className="text-danger">
                        {errors.email.message}
                    </small>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input {...register("password", {
                        required: "Password required",
                        minLength: {
                            value: 7,
                            message: "Password must be at least 7 characters long"
                        },
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/i,
                            message: "Password must contain at least one letter and one digit"
                        }
                    })} className="form-control" type="password" id="passwordInput" />
                    {errors.password && <small className="text-danger">
                        {errors.password.message}
                    </small>
                    }
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

import React from 'react'
import { useForm } from 'react-hook-form'

export const AddCommentForm = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => props.onAdd(data)
    return (
        <div>
            <form className="form-add-comment" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="contentInput">Type in your comment:</label>
                    <input {...register("content")} className="form-control" type="text" id="contentInput" />
                </div>
                <button type="submit" style={{ width: "160px", marginTop: "10px" }} className="btn btn-lg btn-success btn-block">Publish</button>
            </form>
        </div>
    )
}

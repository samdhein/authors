import React, { useState } from 'react';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';

const CreateForm = () => {
// input with onChange - state
// submitHandler with onSubmit - axios
// send info to backend
// if successful: redirect
// if failed: validation

    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()
    

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors', {name})
        .then(res=>{
            console.log(res)
            history.push("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors
            const errorArr = []
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }

    const cancelHandler = () => {
        history.push("/")
    }

    return (
        <div>
            <h2>Add new author</h2>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Name</label>
                    <input type="text" name="title" value={name} onChange={e=>setName(e.target.value)} />
                </p>
                <button>Submit</button>
                <button type="button" onClick={cancelHandler}>Cancel</button>
            </form>
            {
                errors.map((err, i)=>(
                    <p key={i}> {err}</p>
                ))
            }
        </div>
    )
}

export default CreateForm;
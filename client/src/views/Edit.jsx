import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
// grab ID with params
// grab info from backend
// use the info on form
// form needs onChange, submitHandler,
// if successful, redirect to / (useHistory)

const Edit = () => {

    const {id} = useParams()
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            console.log(res.data.name)
            setName(res.data.name)
        })
        .catch(err=>console.log(err))
    },[])

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {name})
        .then(res=>history.push("/"))  // redirect to root if successful
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
            <h1>Edit</h1>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} />
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

export default Edit

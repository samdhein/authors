import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

// need to grab id from props (params unavailable as this is not a route)
// send request to backend (axios)
// redirect

const DeleteButton = (props) => {
    const {id, reloadList} = props
    const history = useHistory()

    const clickHandler = ()=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            reloadList();
            history.push("/")
        })
        .catch(err=>console.log(err))
    }

    return (
        <button onClick={clickHandler}>
            Delete
        </button>
            )
};

export default DeleteButton

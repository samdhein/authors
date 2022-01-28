import React, {useEffect, useState} from 'react';  
import axios from 'axios';
import {Link} from "react-router-dom"
import DeleteButton from './DeleteButton';
// grab info from backend (axios)
// display when loaded.(useEffect)


const DisplayTable = (props) => {

    const [authors, setAuthors] = useState(null)
    const {refresh, reloadList} = props

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>setAuthors(res.data))
            .catch(err=>console.log(err))
    },[refresh])

        return (
            <div>
                <Link to='/authors/new'>New Author</Link>
                {
                    authors?(
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td colSpan={2}>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    authors.map((author, i)=>(  //note: parenthesis allow for an implicit return; curly braces requires explicit return 
                                                <tr key={i}>
                                                    <td>{author.name}</td>
                                                    <td><button><Link to={`/authors/${author._id}/edit`}>Edit</Link></button></td>
                                                    <td><DeleteButton id={author._id} reloadList={reloadList} /></td>
                                                </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ):
                    <h2>Loading...</h2>
                }
            </div>
        )
}

export default DisplayTable;
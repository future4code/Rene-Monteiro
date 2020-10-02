import React, {useEffect, useState} from "react"
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"


export default function PostDetails(){
    const [posts, setPosts] = useState([])
    const { id } = useParams()
    const history = useHistory()
    const token = localStorage.getItem("token")
    const [inputComments, setInputComments]=useState('')
    
    useEffect(()=>{
        token || history.push("/")
        getPostDetails()
    },[])

    const getPostDetails = ()=>{
        const header = {headers : {
            Authorization: token
        }}
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`,header)
        .then((response)=>{
            console.log(response.data.post.comments)
            setPosts(response.data.post.comments)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const logout = () =>{
        localStorage.setItem("token", '')
        history.push("/")
    }

    const changeInput= (event)=>{
        setInputComments(event.target.value)
    }
    const createComment= ()=>{
        const body = {
            text: inputComments
        }
        const header = {headers : {
            Authorization: token
        }}
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment`,body, header)
        .then((response)=>{
            console.log(response)
            getPostDetails()
            
        })
        .catch((error)=>{
            console.log(error)
        })

    }

    return(
        <div>
            <button onClick={logout}>Logout</button>
            <input value={inputComments} onChange={changeInput} placeholder='comentario'/>
            <button onClick={createComment}>Comentar</button>
           {posts.map((item)=>{
               return(
                   <div key={item.id}>
                       {item.username}
                       {item.text}
                       {item.votesCount}
                   </div>
               )
           })}
        </div>
    )
}
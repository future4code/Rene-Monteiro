import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { GoToPostPage } from "../Router/GoToPages"
import { Route } from "react-router-dom"
import PostDetails from '../Components/PostDetail'


const ContainerPosts =styled.div`
display:flex;
flex-direction:column;
align-items: center;


`
const ContainerBox =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 20vw;
border: solid 1px black;
margin-bottom: 25px;
`

export default function CreatePost(){
    const [inputText, setInputText] = useState('')
    const [inputTitle, setInputTitle] = useState('')
    const [posts, setPosts] = useState([])
    const history = useHistory()
    
    
    const token = localStorage.getItem('token')
    useEffect(()=>{
        token || history.push("/")
        getPosts()
    },[])

    const header = { headers :{
        Authorization: token
    }}

    const getPosts = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",header)
        .then((response)=>{
            setPosts(response.data.posts)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    const createPost = () =>{
        if (inputTitle !== '' && inputText !== ''){
            const body = {
                text: inputText ,
                title: inputTitle
            }
            axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",body ,header)
            .then((response)=>{
                setInputText('')
                setInputTitle('')
                getPosts()
                
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }

    const onChangeText =(event) =>{
        setInputText(event.target.value)
    }
    const onChangeTitle =(event) =>{
        setInputTitle(event.target.value)
    }

    const vote = (id, vote)=>{
        const body = {
            direction: vote
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,body, header)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const logout = () =>{
        localStorage.setItem("token", '')
        history.push("/")
    }
   
    const PostLength = posts.length
    return(
        <div>
            <div>
            </div>
            <button onClick={logout}>Logout</button>
            <ContainerPosts>
                <p>Escreva seu Post</p>
                <input value={inputTitle} onChange={onChangeTitle} placeholder='title'/>
                <input value={inputText} onChange={onChangeText} placeholder='text'/>
                <button onClick={createPost}>Post</button>     
                {PostLength > 0 && <p>Total de Posts: {PostLength} </p>} 
           
           {posts.map((item)=>{
               return(
                   <ContainerBox onClick={()=> GoToPostPage(history, item.id)}  key={item.id}>           
                        <p>{item.username}</p>
                        <p>{item.title}</p>
                        <p>{item.text}</p>
                        <p>{item.commentsCount} Comentarios</p>
                        <p onClick={()=>vote(item.id, 1)}>+</p> 
                        <p onClick={()=>vote(item.id, 0)}>0</p> 
                        <p onClick={()=>vote(item.id, -1)}>-</p>
                        <p> {item.votesCount}</p>
                   </ContainerBox>
               )
           })}
            </ContainerPosts>
        </div>
    )
}
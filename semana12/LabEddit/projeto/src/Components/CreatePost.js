import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'


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
`

export default function CreatePost(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getPosts()
    },[])

    const getPosts = () =>{
        const token = localStorage.getItem('token')
        
        const header = { headers :{
            Authorization: token
        }}
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",header)
        .then((response)=>{
            setPosts(response.data.posts)
            console.log(response.data.posts)
            
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    

    return(
        <div>
            <div>
            </div>
            <ContainerPosts>
           {posts.map((item)=>{
               return(
                   <ContainerBox key={item.id}>
                       <p>{item.title}</p>
                       <p>{item.text}</p>
                   </ContainerBox>
               )
           })}
            </ContainerPosts>
        </div>
    )
}
import React from 'react'
import "./Posts.css"
import {PostsData} from "../data/postsdata"
import Post from '../Post/Post'

function Posts() {
  return (
    <div className="posts">
        {PostsData.map((post,id)=>{
            return (<Post post={post}/>)
        })}

    </div>
  )
}

export default Posts
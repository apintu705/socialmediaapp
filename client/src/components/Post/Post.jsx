import React from 'react'
import "./Post.css"
import comment from "../../img/comment.png"
import share from "../../img/share.png"
import heart from "../../img/like.png"
import notlike from "../../img/notlike.png"

function Post({post}) {
    
  return (
    <div className="post">
        <img src={post.img} alt="" />

        <div className="postreact">
            <img src={post.liked?heart:notlike} alt="" />
            <img src={comment} alt="" />
            <img src={share} alt="" />
        </div>

        <span style={{color:"var(--gray)",fontSize:"13px"}}>{post.likes} Likes</span>

        <div className="details">
            <span><b>{post.name}</b></span>
            <span> {post.desc}</span>
        </div>
    </div>
  )
}

export default Post
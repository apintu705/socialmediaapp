import React from 'react'
import "./followrerscard.css"
import {Followers} from "../data/followrerdata"

function Followerscard() {
  return (
    <div className="followercard">
        <h3>Who is following you</h3>
        {Followers.map((follower,id)=>{
            return (
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="img" className="followerimg" />
                    </div>

                    <div className="name">
                        <span>{follower.name} </span>
                        <span>@ {follower.username}</span>
                    </div>

                    <button className="button fc-button">
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default Followerscard
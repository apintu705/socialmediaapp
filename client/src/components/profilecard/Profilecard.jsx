import React from 'react'
import "./profilecard.css"
import cover from "../../img/cover.jpg"
import profileimage from "../../img/profileImg.jpg"

function Profilecard() {
    const profilepage=true;
  return (
    <div className="profilecard">
        <div className="profileimage">
            <img src={cover} alt="cover"/>
            <img src={profileimage} alt="profileimg"/>
        </div>

        <div className="profilename">
            <span>abhishek</span>
            <span>senior ui designer</span>
        </div>

        <div className="followstatus">
            <hr />
            <div>
            <div className="follow">
                <span>6,890</span>
                <span>Followings</span>
            </div>
            <div className="vl">
                
            </div>
            <div  className="follow">
                <span>1</span>
                <span>Followers</span>
            </div>
            {profilepage&&(
                <>
                <div className="vl"></div>
                <div className="follow">
                    <span><b>3 </b></span>
                    <span> Posts</span>

                </div>
                </>
            )}
            </div>
            <hr/>
        </div>

         {profilepage?"":<span>My Profile</span>}       
        
    </div>
  )
}

export default Profilecard
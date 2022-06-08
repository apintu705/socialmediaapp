import React from 'react'
import Postside from '../../components/postside/Postside'
import Profilecard from '../../components/profilecard/Profilecard'
import Profileleft from '../../components/Profileleft/Profileleft'
import Rightside from '../../components/Rightside/Rightside'
import "./Profile.css"

function Profile() {
  return (
    <div className="profile">
        <Profileleft/>

        <div className="profilecenter">
          <Profilecard/>
          <Postside/>

        </div>

        <Rightside/>
    </div>
  )
}

export default Profile
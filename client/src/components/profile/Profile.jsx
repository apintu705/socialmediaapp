import React from 'react'
import "./profile.css"
import Logosearch from '../Logosearch/Logosearch'
import Profilecard from '../profilecard/Profilecard'
import Followerscard from '../followerscard/Followerscard'

function Profile() {
  return (
    <div className="profileside">
        <Logosearch/>
        <Profilecard/>
        <Followerscard/>
    </div>
  )
}

export default Profile
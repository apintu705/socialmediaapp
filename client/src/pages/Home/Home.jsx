import React from 'react'
import "./Home.css"
import Profile from '../../components/profile/Profile'
import Postside from '../../components/postside/Postside'
import Rightside from '../../components/Rightside/Rightside'

function Home() {
  return (
    <div className="home">
        
        <Profile/>
        <Postside/>
        <Rightside/>
        
    </div>
  )
}

export default Home
import React from 'react'
import Posts from '../Posts/Posts'
import Postshare from '../Share/Postshare'

import "./Postside.css"

function Postside() {
  return (
    <div className="postside">
        <Postshare/>
        <Posts/>
    </div>
  )
}

export default Postside
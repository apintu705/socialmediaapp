import React from 'react'
import Logosearch from '../Logosearch/Logosearch'

import Followerscard from "../../components/followerscard/Followerscard"
import Infocard from '../Infocard/Infocard'

function Profileleft() {
  return (
    <div className="profileside">
        <Logosearch/>
        <Infocard/>
        <Followerscard/>

    </div>
  )
}

export default Profileleft
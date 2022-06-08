import React from 'react'
import "./logosearch.css"
import logo from "../../img/logo.png"
import {UilSearch} from "@iconscout/react-unicons"


function Logosearch() {
  return (
    <div className="logosearch">
      <img src={logo} alt="logo"/>
      <div className="search">
        <input type="text"
        placeholder="#explore"/>
        <div className="searchicon">
        <UilSearch/>
      </div>
      </div>
      

    </div>
  )
}

export default Logosearch
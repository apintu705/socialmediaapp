import React,{useState} from 'react'
import "./Rightside.css"
import home from "../../img/home.png"
import noti from "../../img/noti.png"
import comment from "../../img/comment.png"
import {UilSetting} from "@iconscout/react-unicons"
import Trendcard from '../Trendcard/Trendcard'
import Sharemodel from '../sharemodal/sharemodel'

function Rightside() {

  const [modalopened,setmodalopened]=useState(false)
  return (
    <div className="rightside">
        <div className="navicons">
            <img src={home} alt="Home" /> 
            <UilSetting/>
            <img src={noti} alt="Noti" />
            <img src={comment} alt="Comment" />
        </div>

        <Trendcard/>

        <button className="button shr-button"
        onClick={()=>setmodalopened(true)}
        >
          
            Share
        </button>


        <Sharemodel modalopened={modalopened}
          setmodalopened={setmodalopened} />
    </div>
  )
}

export default Rightside
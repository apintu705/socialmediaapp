import React,{useState} from 'react'
import "./Infocard.css"
import {UilPen} from "@iconscout/react-unicons"
import Profilemodal from '../profilemodel/profilemodel'

function Infocard() {

    const [modalopened,setmodalopened]=useState(false)
  return (
    <div className="infocard">
        <div className="infohead">
            <h4>Your info</h4>
            <div>
               <UilPen width="2rem" height="1.2rem"
               onClick={()=>setmodalopened(true)} /> 
                <Profilemodal modalopened={modalopened}
                setmodalopened={setmodalopened}/>
            </div>
            
        </div>

        <div className="info">
            <span><b>Status </b></span>
            <span> In  a relationship</span>
        </div>
        <div className="info">
            <span><b>Lives in </b></span>
            <span> Delhi</span>
        </div>
        <div className="info">
            <span><b>Wroks at </b></span>
            <span> Masai School</span>
        </div>

        <button className="button logout-button">
            Logout
        </button>
    </div>
  )
}

export default Infocard
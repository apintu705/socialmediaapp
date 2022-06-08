import React,{useState,useRef} from 'react'
import "./Postshare.css"
import profileimg from "../../img/profileImg.jpg"
import {UilScenery,UilPlayCircle,UilTimes,UilLocationPoint,UilSchedule} from "@iconscout/react-unicons"

function Postshare() {

  const [image,setimage]=useState(null);
  const imageref=useRef(image)

  const imagechangefunc=(e)=>{
    if(e.target.files&&e.target.files[0]){
      let img=e.target.files[0];
      setimage({image:URL.createObjectURL(img)})
    }
  }

  return (
    <div className="postshare">
        <img src={profileimg} alt="img"/>

        <div>
          <input type="text"
          placeholder="What is happening?"/>

          <div className="postoptions">
            <div className="option"
            style={{color:"var(--photo)"}}
            onClick={()=>imageref.current.click()} >
              <UilScenery/>
              Photo
            </div>
            <div className="option"
            style={{color:"var(--video)"}}>
              <UilPlayCircle/>
              Video
            </div>
            <div className="option"
            style={{color:"var(--location)"}}>
              <UilLocationPoint/>
              Location
            </div>
            <div className="option"
            style={{color:"var(--shedule)"}}>
              <UilSchedule/>
              Schedule
            </div>
            <button className="button ps-button">Share</button>

            <div style={{display:"none"}}>
              <input type="file" name="myimage" ref={imageref}
              onChange={(e)=>imagechangefunc(e)} />
            </div>
            
          </div>
          {image &&
            <div className="previewimage">
              <UilTimes onClick={()=>setimage(null)}/>
              <img src={image.image} alt=""/>
            </div>
          }
        </div>
        
        
    </div>
  )
}

export default Postshare
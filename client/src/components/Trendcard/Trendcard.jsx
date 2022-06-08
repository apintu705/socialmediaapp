import React from 'react'
import "./Trendcard.css"
import {TrendData} from "../data/trenddata"

function Trendcard() {
  return (
    <div className="trendcard">
        <h3>Trends for you</h3>
        {TrendData.map((trend,id)=>{
            return (
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>#{trend.shares}k  shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default Trendcard
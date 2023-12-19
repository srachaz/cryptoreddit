import React from 'react'
import "./Post.css"
import Image from 'next/image'
import BestIcon from "../../../ImageForReddit/icons8-rocket-64.png"
import HotIcon from "../../../ImageForReddit/icons8-hot-30.png"
import Newicon from "../../../ImageForReddit/icons8-new-50.png"
import Topicon from "../../../ImageForReddit/icons8-up-80.png"
import showmore from "../../../ImageForReddit/icons8-dot-67.png"
import Card from "../../../ImageForReddit/card.png"
export default function Post() {
  return (
    <div>
        <div style={{dipslay:'flex', justifyContent:"space-between", marginTop:10}}>
            <div style={{display:'flex'}}>            
            <div className="PostTopItemContainer">
                <Image
                src={BestIcon}
                className="linkIcons"
                alt="logo"
                />
                <p style={{marginTop:7}}>Best</p>
            </div>
            <div className="PostTopItemContainer">
                <Image
                    src={HotIcon}
                    className="linkIcons"
                    alt="logo"
                    />
                <p style={{marginTop:7}}>Hot</p>
            </div>
            <div className="PostTopItemContainer">
                <Image
                    src={Newicon}
                    className="linkIcons"
                    alt="logo"
                    />
                 <p style={{marginTop:7, marginLeft:4}}>New</p>
            </div>
            <div className="PostTopItemContainer">
            <Image
                    src={Topicon}
                    className="linkIcons"
                    alt="logo"
                    />
                 <p style={{marginTop:12, marginLeft:4}}>Top</p>
            </div>
            <Image
                    src={showmore}
                    className="linkIcons"
                    alt="logo"
                    />
        </div>

        <div>
            <Image
                src={Card}
                className="Cardcon"
                alt="logo"
                />
        </div>
        </div>
        <div></div>
        
    </div>
  )
}

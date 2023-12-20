import React from 'react'
import "./rightitem.css"
import Image from "next/image";
import Profile from "../../../ImageForReddit/profile.png";
import Coverimage from "../../../ImageForReddit/home-banner.png";
export default function RightItempart2() {
  return (
    <div className='Rightbaritempart2'>
        <Image src={Coverimage} className='coverimage' alt="logo" />
        <div style={{display:'flex', alignItems:'center'}}>
            <Image src={Profile} className='profilerightitempt2' alt="logo" />
            <p className='Hometag'>Home</p>
            <p className='pdescription'>This is your personal reddit front page blah bla r personal reddit front page bl r personal reddit front page blh</p>
            <button className='createpostpt2'>Create Post</button>
            <button className='createcommpt2'>Create Community</button>

        </div>

    </div>
  )
}

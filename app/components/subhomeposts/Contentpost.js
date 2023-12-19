import React from 'react'
import "./Contentpost.css"
import Image from 'next/image'
import profileIcon from "../../../ImageForReddit/profile.png"
import imageIcon from "../../../ImageForReddit/icons8-image-50.png"
import linkicon from "../../../ImageForReddit/link.png"

export default function Contentpost() {
  return (
    <div className="MainContentPost">
        <Image
            src={profileIcon}
            className="profileContent"
            alt="logo"
         />
         <input placeholder='Create Post' className='inputforContent'/>
         <Image
            src={imageIcon}
            className="imageIcon"
            alt="logo"
         />
         <Image
            src={linkicon}
            className="linkicon"
            alt="logo"
         />
    </div>
  )
}

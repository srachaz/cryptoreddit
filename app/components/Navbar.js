import React from 'react'
import "./navbar.css"
import Image from 'next/image'
import logo from "../../ImageForReddit/Reddit.png"
import logoname from "../../ImageForReddit/namelogo.png"
import Homelogo from "../../ImageForReddit/home.png"
import searchIcon from "../../ImageForReddit/search.png"
import messageimage from "../../ImageForReddit/icons8-message-50.png"
import notification from "../../ImageForReddit/icons8-notification-50.png"
import addicon from "../../ImageForReddit/icons8-plus-24.png"
import ads from "../../ImageForReddit/ads.png"
import popular from "../../ImageForReddit/popular.png"
import profileIcon from "../../ImageForReddit/profile.png"
import showmore from "../../ImageForReddit/down.png"



export default function Navbar() {
    return (
        <div className="main">
            <div className="Rightbar">
                <div className="logoContainer">
                    <Image
                        src={logo}
                        className="logostyle"
                        alt="logo"
                        />

                    <Image
                        src={logoname}
                        className="logonamestyle"
                        alt="logo"
                        />

                </div>

                <div className="logoContainerPart2"> 
                    <Image
                        src={Homelogo}
                        className="homestyle"
                        alt="logo"
                    />
                    <p style={{paddingLeft:6, marginTop:2, fontSize:14}}>Home</p>
                </div>

            </div>

            <div className="Centerbar">
                <div style={{display:'flex', alignItems:'center', marginLeft: 20}}>
                    <Image
                            src={searchIcon}
                            className="searchstyle"
                            alt="logo"
                            /> 
                    <input placeholder="Search Reddit" className="SearchBox"/>
                </div>
            </div>

            <div className="Leftbar">
                <div style={{display: "flex", alignItems:"center", justifyContent: "space-between"}}>
                    <Image
                                src={popular}
                                className="popularicon"
                                alt="logo"
                                /> 
                    <Image
                                src={messageimage}
                                className="message"
                                alt="logo"
                                /> 
                    <Image
                                src={notification}
                                className="notification"
                                alt="logo"
                                /> 
                    <Image
                                src={addicon}
                                className="adscontent"
                                alt="logo"
                                /> 
                    <Image
                                src={ads}
                                className="ads"
                                alt="logo"
                                />             
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <Image
                        src={profileIcon}
                        className="profileIcon"
                        alt="logo"
                                    />
                    <div style={{marginTop:4}}>
                        <p style={{fontSize:11}}>Gradworld</p>
                        <p style={{fontSize:11}}>32 Karma</p>
                    </div>
                    <div>
                    <Image
                        src={showmore}
                        className="showmore"
                        alt="logo"
                                    />
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import "./SubHome.css"
import Contentpost from './subhomeposts/Contentpost'
import Post from './subhomeposts/Post'
import Subcat from './subhomeposts/Subcat'
export default function SubHome() {
    return (
        <>
        <div className="MainSubHome">
            <div className="subhomeLeft">
               
            </div>
            <div className="MainSubhomeCenter">
                <div>
                    <Contentpost/>
                   <Subcat/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
            <div className="subhomeRight">

            </div>
        </div>
        </>
    )
}
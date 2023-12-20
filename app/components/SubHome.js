import React from 'react'
import "./SubHome.css"
import Contentpost from './subhomeposts/Contentpost'
import Post from './subhomeposts/Post'
import Subcat from './subhomeposts/subcat'
import Rightitempart1 from './RightItems/Rightitempart1'
import RightItempart2 from './RightItems/RightItempart2'
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
                <Rightitempart1/>
                <RightItempart2/>
            </div>
        </div>
        </>
    )
}
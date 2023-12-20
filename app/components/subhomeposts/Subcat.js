import React from 'react'
import "./Post.css";

export default function Subcat() {
  return (
    <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 20,
                    marginLeft: -29,
                }}
            >
                <div style={{ display: "flex" }}>
                    <div className="PostTopItemContainer">
                        <Image src={besticon} className="linkIcons" alt="logo" />
                        <p style={{ marginTop: 7, fontSize: 13 }}>Best</p>
                    </div>
                    <div className="PostTopItemContainer">
                        <Image src={HotIcon} className="linkIcons" alt="logo" />
                        <p style={{ marginTop: 7, fontSize: 13 }}>Hot</p>
                    </div>
                    <div className="PostTopItemContainer">
                        <Image src={Newicon} className="linkIcons" alt="logo" />
                        <p style={{ marginTop: 7, fontSize: 13, marginLeft: 4 }}>New</p>
                    </div>
                    <div className="PostTopItemContainer">
                        <Image src={Topicon} className="linkIcons" alt="logo" />
                        <p style={{ marginTop: 12, marginLeft: 4, fontSize: 13 }}>Top</p>
                    </div>
                    <Image src={showmore} className="moreIcon" alt="logo" />
                </div>

                <div>
                    <Image src={Card} className="Cardcon" alt="logo" />
                </div>
            </div>
  )
}

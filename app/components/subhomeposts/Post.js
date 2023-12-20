import React from "react";
import "./Post.css";
import Image from "next/image";
import besticon from "../../../ImageForReddit/icons8-rocket-64.png";
import HotIcon from "../../../ImageForReddit/icons8-hot-30.png";
import Newicon from "../../../ImageForReddit/icons8-new-50.png";
import Topicon from "../../../ImageForReddit/icons8-up-80.png";
import showmore from "../../../ImageForReddit/icons8-dot-67.png";
import Card from "../../../ImageForReddit/card.png";
import Profile from "../../../ImageForReddit/profile.png";
import upIcon from "../../../ImageForReddit/icons8-up-80.png";
import down from "../../../ImageForReddit/icons8-down-80.png";
import postImage from "../../../ImageForReddit/image.jpg";
import CommentIcon from "../../../ImageForReddit/icons8-comment-50.png";
import shareIcon from "../../../ImageForReddit/icons8-share-50.png";
import saveIcon from "../../../ImageForReddit/icons8-save-50.png";

export default function Post() {
    return (
        <div>
            {/* <div
                style={{
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
            </div> */}
            <div className="PostContainer">
                <div className="postContainerLeftbar">
                    <Image src={upIcon} className="profile" alt="logo" />
                    <p>234</p>
                    <Image src={down} className="profile" alt="logo" />
                </div>
                <div className="postContainerRightbar">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Image src={Profile} className="profile" alt="logo" />
                        <p style={{ marginLeft: 0, fontSize: 12 }}>R/StableDiffusion</p>
                        <p style={{ marginLeft: 10, fontSize: 12, color: "#808080" }}>
                            Posted by Sarah Zhang
                        </p>
                    </div>
                    <p>Was it good while it lasted</p>
                    <Image src={postImage} className="postImage" alt="logo" />

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{ display: "flex", alignItems: "center", marginLeft: -10 }}
                        >
                            <Image src={CommentIcon} className="profile" alt="logo" />
                            <p
                                style={{
                                    paddingLeft: 6,
                                    paddingRight: 29,
                                    color: "#808080",
                                    fontSize: 14,
                                }}
                            >
                                64 comments
                            </p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Image src={shareIcon} className="profile" alt="logo" />
                            <p
                                style={{
                                    paddingLeft: 3,
                                    paddingRight: 29,
                                    color: "#808080",
                                    fontSize: 14,
                                }}
                            >
                                Share
                            </p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Image src={saveIcon} className="profile" alt="logo" />
                            <p
                                style={{
                                    paddingLeft: 3,
                                    paddingRight: 29,
                                    color: "#808080",
                                    fontSize: 14,
                                }}
                            >
                                Save
                            </p>
                        </div>
                        <Image src={down} className="profile" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

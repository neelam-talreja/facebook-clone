import React from 'react';
import '../Post.css';
import { Avatar } from '@material-ui/core';
import {
  ThumbUp,
  ChatBubbleOutline,
  NearMe,
  AccountCircle,
  ExpandMore
} from '@material-ui/icons'

function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className="post">
        <div className="postTop">
          <Avatar src={profilePic} className="postAvatar" />
          <div className="postTopicInfo">
            <h3>{username}</h3>
            <p>{timestamp}</p>
            {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          </div>
        </div>

        <div className="postBottom">
          <p>{message}</p>
        </div>

        <div className="postImage">
           <img src={image} alt=""/>
        </div>

        <div className="postOptions">
          <div className="postOption">
            <ThumbUp />
            <p>Like</p>
          </div>

          <div className="postOption">
            <ChatBubbleOutline />
            <p>Comment</p>
          </div>

          <div className="postOption">
            <NearMe />
            <p>Share</p>
          </div>

          <div className="postOption">
            <AccountCircle />
            <ExpandMore />
          </div>

        </div>
    </div>
  )
}

export default Post

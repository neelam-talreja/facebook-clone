import React from 'react'
import StoryReel from './StoryReel';
import '../Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {
  return (
    <div className="feed">
     {/* Story Reel */}
     <StoryReel />
     {/* Message sender */}
      <MessageSender />
      {/* Post */}
      <Post 
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStj6RO1uXHPbVOr4Mnvc7q6cCoGmrLTI_9hQ&usqp=CAU" 
        message='WOW this works'
        timestamp="This is a timestamp"
        username='neelamT'
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwv6-84ptaJz9KE-pfUg6jZ2k7pyD2FGayuQ&usqp=CAU"
      />
       <Post 
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStj6RO1uXHPbVOr4Mnvc7q6cCoGmrLTI_9hQ&usqp=CAU" 
        message='WOW this works'
        timestamp="This is a timestamp"
        username='neelamT'
      />
    </div>
  )
}

export default Feed

import React from 'react';
import '../MessageSender.css'
import { Avatar } from '@material-ui/core';
import { Videocam, PhotoLibrary, InsertEmoticon } from '@material-ui/icons';

function MessageSender() {

  const [input, setInput] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
      setInput('')
      setImageUrl('')
  }
  return (
    <div className="messageSender">
      <div className="messageSenderTop">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStj6RO1uXHPbVOr4Mnvc7q6cCoGmrLTI_9hQ&usqp=CAU"  />
        <form>
          <input type="text"
            value={input}
            className="messageSenderInput"
            onChange={(e) => setInput(e.target.value)}
            placeholder= "What's on your mind?"
           />
          <input type="text"
            value={input}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL(optional)"
          />
          <button onClick={handleSubmit} type="submit">Hidden submit</button>
        </form>
      </div>

      <div className="messageSenderBottom">
        <div className="messageSenderOption">
          <Videocam fontSize="large"  style={{color:'red'}}/>
          <h3>Live Video</h3>
        </div> 

        <div className="messageSenderOption">
          <PhotoLibrary fontSize="large"  style={{color:'green', }}/>
          <h3>Photo/Video</h3>
        </div> 

        <div className="messageSenderOption">
          <InsertEmoticon fontSize="large"  style={{color:'orange'}}/>
          <h3>Feeling/Activity</h3>
        </div> 
      </div>
    </div>
  )
}

export default MessageSender

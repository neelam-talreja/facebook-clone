import React from 'react';
import '../styles/Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <iframe src="https://css-tricks.com/css-animation-libraries/"
        width="340"
        height="100%"
        style={{border: 'none', overflow:'hidden'}}
        scrolling="yes"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      >
        </iframe>
    </div>
    
  )
}

export default Widgets

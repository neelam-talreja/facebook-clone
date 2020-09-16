// UncontrolledLottie.jsx
import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../31140-success.json';
import '../Lottie.css';

class App extends Component {

  render(){

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={50}
              width={50}
        />
      </div>
    )
  }
}

export default App

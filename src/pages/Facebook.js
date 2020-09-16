import React from 'react';
import '../styles/Facebook.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import  Widget from '../components/Widgets';

function Facebook() {
  return (
    <div className="app">
     {/* Header */}
      <Header/>
     {/* App body */}
     <div className="appBody">
       {/* sidebar */}
       <Sidebar/>
       {/* feed */}
       <Feed />
       {/* widgets */}
       <Widget />
      </div>
    </div>
  );
}

export default Facebook;

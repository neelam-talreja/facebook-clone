import React from 'react';
import '../Facebook.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import  Widget from './Widgets';

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

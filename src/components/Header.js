import React from 'react'
import '../Header.css';
import {
  Search,
  Home,
  Flag,
  Subscriptions,
  Storefront,
  SupervisedUserCircle,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore
} from '@material-ui/icons';
import { Avatar, IconButton} from '@material-ui/core';

function Header() {

  return (
    <div className="header">
       <div className="headerLeft">
         <img 
          src="data:image/jpeg;base64,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"alt=""
        />
        <div className ="headerInput">
          <Search />
          <input type="text" placeholder="Search Facebook"/>
        </div>
       </div>

       <div className="headerMiddle">
         <div className="headerOption headerOptionActive">
          <Home fontSize="large"/>
         </div>
         <div className="headerOption">
          <Flag fontSize="large"/>
         </div>
         <div className="headerOption">
          <Subscriptions fontSize="large"/>
         </div>
         <div className="headerOption">
          <Storefront fontSize="large"/>
         </div>
         <div className="headerOption">
          <SupervisedUserCircle fontSize="large"/>
         </div>
         
       </div>

       <div className="headerRight">
         <div className="headerInfo">
           <Avatar />
           <h4>Neelam Talreja</h4>
         </div>

         <IconButton>
           <Add />
         </IconButton>
         <IconButton>
           <Forum />
         </IconButton>
         <IconButton>
           <NotificationsActive />
         </IconButton>
         <IconButton>
           <ExpandMore />
         </IconButton>

       </div>
    </div>
    
  )
}
export default Header

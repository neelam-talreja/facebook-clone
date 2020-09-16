import React from 'react';
import {
  People,
  EmojiFlags,
  Flag,
  Chat,
  Storefront,
  VideoLibrary,
} from '@material-ui/icons';
import SidebarRow from './SidebarRow';
import '../styles/sidebar.css'


function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStj6RO1uXHPbVOr4Mnvc7q6cCoGmrLTI_9hQ&usqp=CAU" 
          title ="Neelam Talreja"
        />
        <SidebarRow Icon={EmojiFlags} title="Pages with Sensitive Info."/>
        <SidebarRow Icon={People} title="Friends"/>
        <SidebarRow Icon={Chat} title="Messenger"/>
        <SidebarRow Icon={Storefront} title="Marketplace"/>
        <SidebarRow Icon={VideoLibrary} title="Videos"/>


    </div>
  )
}

export default Sidebar

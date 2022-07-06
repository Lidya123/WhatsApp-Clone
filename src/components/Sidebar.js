import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat'
import db from '../firebase';
function Sidebar() {
  const [rooms,setRooms] = useState([]);

  useEffect(()=>{
    db.collection('rooms').onSnapshot(snapshot =>
      (
        setRooms(snapshot.docs.map(doc=>
          ({
            id : doc.id,
            data : doc.data(),
          })
          ))
      ))
  },[])

  return (
    <div className="sidebar">
     <div className="sidebar_header">
      <Avatar/>
        <div className="side_icons">
          <IconButton>
          <DonutLargeIcon />
          </IconButton>
          <IconButton>
          <ChatIcon/>
          </IconButton>
          <IconButton>
          <MoreVertIcon/>
          </IconButton> 
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
        <SearchIcon/>
        <input type="text" placeholder='Search or start new chat...'/>
        </div>
      </div>
    
    <div className="sidebar_chats">
        <SidebarChat addNewChat/>
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
    </div>     
    </div>
  )
}

export default Sidebar
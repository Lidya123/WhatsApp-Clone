import React,{useState, useEffect} from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'
import db from '../firebase'

function SidebarChat({id, name, addNewChat}) {
  const [randomStr,setRandomStr] = useState(""); 

useEffect(()=>{
   setRandomStr( Math.floor(Math.random()*1000))
},[])

const createChat=()=>{
  const roomName = prompt("Enter Room Name!");

  if (roomName){
    db.collection('rooms').add({
      name : roomName,
    })
  }
}

  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${randomStr}.svg`}/>
      <div className='sidebarChat_info'>
        <h3>{name}</h3>
        <p style={{"fontSize":"13px"}}>Last message...</p>
      </div>

    </div>
  ):
  (
    <div onClick={createChat} className="sidebarChat">
      <h3>Add New Chat</h3>
    </div>
  )
}

export default SidebarChat
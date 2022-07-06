import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

function Chat() {
  const [randomStr, setRandomStr] = useState("");
  const [input,setInput] = useState(""); 

  useEffect(() => {
    setRandomStr(Math.floor(Math.random() * 1000));
  }, []);

const sendMessage=(e)=>{
  e.preventDefault(); //prevent from refreshing
  console.log(input);
  setInput('');
}

  return (
    <div className="chat">

      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${randomStr}.svg`}
        />

        <div className="chat_info">
          <h3>Room Name </h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_icons">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

      </div>

      <div className="chat_body">
        <p className={`chat_message ${true && "chat_user"}`}> 
        {/*if its the user his msg will be green*/}
            <span className="chat_name">
                Lidya
            </span>
            Hey guys
            <span className="chat_timestamp">
                11:27pm
            </span>
        </p>
      </div>

      <div className="chat_footer">
      <InsertEmoticonIcon/>
      <form >
      <input value={input} //initial empty string
      onChange={(e)=>setInput(e.target.value)} //trigger val on change tn input val set!
      type="text" placeholder="Type your message here" />
      <button onClick={sendMessage}
       type="submit">Send message</button>
      </form>
      <KeyboardVoiceIcon/>
      </div>

    </div>
  );
}

export default Chat;

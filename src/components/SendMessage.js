import { Input } from "@mui/material";
import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import { serverTimestamp } from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";
import { collection ,addDoc } from "firebase/firestore";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");

  const sendMessage = async(e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
      await addDoc(collection(db, "messages"),{
      text: message,
      photoURL,
      uid,
      createdAt:serverTimestamp()
    } );

    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
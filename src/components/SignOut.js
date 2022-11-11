import React from "react";
import { Button } from "@mui/material";
import { auth } from "../firebase.js";
import CallIcon from "@mui/icons-material/Call";
import { auth, signOut } from "../firebase.js";

function SignOut() {

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("success");
          }).catch((error) => {
            alert(error);
          });
    }
  return (
    <div className="header">
      <Button
        onClick={handleSignOut}
        style={{ color: "white", fontSize: "15px" }}
      >
        サインアウト
      </Button>
      <h3>名前</h3>
      <CallIcon />
    </div>
  );
}

export default SignOut;
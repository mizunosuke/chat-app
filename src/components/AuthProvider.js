import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { GoogleAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useNavigate } from "react-router-dom";



const AuthContext = React.createContext();
//認証情報
export const AuthProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState(null);
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setCurrentUser(user);
            navigate("/line");
        }).catch((error) => {
           alert(error);
           console.log(error);
        });
    }


  useEffect(() => {
      auth.onAuthStateChanged((currentUser) => {
          setCurrentUser(currentUser)
      });
  }, []);

    return(
        <div>
            <AuthContext.Provider value={{signInWithGoogle, currentUser}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export { AuthContext };
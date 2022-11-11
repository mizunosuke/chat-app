import React, { useContext, useState } from 'react'
import { Button } from '@mui/material'
import { AuthContext } from './AuthProvider'


export const SignIn = () => {

    const { signInWithGoogle } = useContext(AuthContext);
    
    const signIn = () => {
        signInWithGoogle();
    }

  return (
    <div>
        <Button onClick={signIn}>Googleでログインする</Button>
    </div>
  )
}

import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const Registr = () => {
        axios({
            url:`https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin/`,
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default Login

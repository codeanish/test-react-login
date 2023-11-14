import React, { useState } from 'react'
import './Login.css'

type Props = {
  setToken: (token: string) => void;
}

const LoginUser = async (username: string, password: string) => {
  return fetch('http://localhost:8080/login', {
    method: "POST",
  headers: {'Content-Type':'application-json'},
  body: JSON.stringify({'username':username, 'password':password})
}).then(data => data.json())
}

export default function Login(props: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const token = await LoginUser(username, password);
    props.setToken(token);
  }


  return(
    <div className='login-wrapper'>
      <h1>Please log in</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}

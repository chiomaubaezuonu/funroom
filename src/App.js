import React, { useState, useRef } from 'react'
import Auth from './components/Auth'
import Chat from './components/Chat';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
const [room, setRoom] = useState(null)

const roomInputRef = useRef();

  if(!isAuth){
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    )
  }
  return <div>{room ? 
    <Chat room={room} /> : 
  <div>
    <label>Enter room name:</label><br></br>
    <input ref = {roomInputRef} placeholder='room name...' className='border-blue-600' />
    <button onClick={() => setRoom(roomInputRef.current.value)} className='bg-blue-600 text-white rounded p-1 m-2'>Enter Chat</button>
    </div>}</div>
}

export default App
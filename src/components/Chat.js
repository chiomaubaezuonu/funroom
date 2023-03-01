import React, { useState, useEffect} from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { auth, db } from "../fb-config"

const Chat = (props) => {
    //destructure the props:
    const { room } = props;

    const [newMsg, setNewMsg] = useState("");
    const messagesColRef = collection(db, "messages")
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMsg === "") return;

        await addDoc(messagesColRef, {
            text: newMsg,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room: room
        });
        setNewMsg("")

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => { setNewMsg(e.target.value) }} value={newMsg} placeholder='Enter your message...' />
                <button type='submit' className='bg-blue-600 text-white rounded p-1 border-gray-500'>Send</button>
            </form>
        </div>
    )
}

export default Chat
import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import Participant from "./Participants/Participants";
import Message from "./Messages/Messages";
import React from 'react'

const Dialog = (props) => {
    let messageInput= React.createRef()
    let createMessage = () => {
        let textField = messageInput.current.value
        props.dispatch({type: "ADD-MESSAGE", newText: textField})
    }
    let messageTextChange = () => {
        let textField = messageInput.current.value
        props.dispatch({type: "UPDATE-MESSAGE-TEXT", newText: textField})
    }

    return (
        <div className={classes.participants}>
            <section>
                <textarea
                    ref={messageInput}
                    value={props.dialog.newMessage}
                    onChange={messageTextChange}/>
                <button onClick={createMessage}>Submit</button>
            </section>
            <div className="participants">
                {props.dialog.participants.map(item => <Participant id={item.id} name={item.name}/>)}
            </div>
            <div className="messages">
                {props.dialog.messages.map(item => <Message title={item.title}/>)}
            </div>
        </div>
    )
}
export default Dialog

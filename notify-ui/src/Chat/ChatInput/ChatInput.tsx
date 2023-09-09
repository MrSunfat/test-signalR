import React, { useState } from 'react';

type PropsChatInput = {
    sendMessage: Function,
}

const ChatInput = (props: PropsChatInput) => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        } 
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onUserUpdate = (e: React.FormEvent<HTMLInputElement>) => {
        setUser(e.currentTarget.value);
    }

    const onMessageUpdate = (e: React.FormEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value);
    }

    return (
        <form 
            onSubmit={(event: React.SyntheticEvent) => onSubmit(event)}>
            <label htmlFor="user">User:</label>
            <br />
            <input 
                id="user" 
                name="user" 
                value={user}
                onChange={onUserUpdate} />
            <br/>
            <label htmlFor="message">Message:</label>
            <br />
            <input 
                type="text"
                id="message"
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
            <br/><br/>
            <button>Submit</button>
        </form>
    )
};

export default ChatInput;
import React, { useState, useEffect, useRef } from 'react';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

import ChatWindow, { ChatType } from './ChatWindow/ChatWindow';
import ChatInput from './ChatInput/ChatInput';

const Chat = () => {
    // const [ connection, setConnection ] = useState<HubConnection | null>(null);
    const [ chat, setChat ] = useState<ChatType[]>([]);
    const latestChat = useRef<ChatType[] | null>(null);

    latestChat.current = chat;

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('https://localhost:44380/hubs/chat')
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(result => {
                console.log('Connected!');

                connection.on('ReceiveMessage', message => {
                    let updatedChat: ChatType[] = [];
                    if (latestChat.current && latestChat.current.length > 0) {
                        updatedChat = [...latestChat.current];
                    }
                    updatedChat.push(message);
                
                    setChat(updatedChat);
                });
            })
            .catch(e => console.log('Connection failed: ', e));
    }, []);

    const sendMessage = async (user: string, message: string) => {
        const chatMessage = {
            user: user,
            message: message
        };

        try {
            await  fetch('https://localhost:44380/chat/messages', { 
                method: 'POST', 
                body: JSON.stringify(chatMessage),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch(e) {
            console.log('Sending message failed.', e);
        }
    }

    return (
        <div>
            <ChatInput sendMessage={sendMessage} />
            <hr />
            <ChatWindow chat={chat}/>
        </div>
    );
};

export default Chat;
import { type } from 'os';
import React from 'react';

export type ChatType = {
    user: string,
    message: string
}

const Message = (props: ChatType) => (
    <div style={{ background: "#eee", borderRadius: '5px', padding: '0 10px' }}>
        <p><strong>{props.user}</strong> says:</p>
        <p>{props.message}</p>
    </div>
);

export default Message;
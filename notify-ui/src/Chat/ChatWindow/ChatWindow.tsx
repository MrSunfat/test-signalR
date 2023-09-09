import Message, { ChatType } from './Message/Message';


type PropsChatWindow = {
    chat: ChatType[]
}

const ChatWindow = (props: PropsChatWindow) => {
    const chat = props.chat
        .map((m) => <Message 
            key={Date.now() * Math.random()}
            user={m.user}
            message={m.message}/>);

    return(
        <div>
            {chat}
        </div>
    )
};

export default ChatWindow;
export type {
    PropsChatWindow,
    ChatType
}
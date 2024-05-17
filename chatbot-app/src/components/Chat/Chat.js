import React, { useRef } from 'react';
import MessageList from './chat_children/MessageList/MessageList';
import Input from './chat_children/Input/Input';
import './Chat.css';

const Chat = () => {
  return (
    <div className="chat-container">
      <MessageList initialMessages={[
        { sender: 'Assistant', text: 'Hello!', isLeft: true },
        { sender: 'You', text: 'Hi! How are you?', isLeft: false },
        { sender: 'Assistant', text: 'I am good, thanks!', isLeft: true },
        { sender: 'You', text: 'Great to hear!', isLeft: false },
      ]} />
      <Input onSendMessage={()=>{}} />
    </div>
  );
};

export default Chat;

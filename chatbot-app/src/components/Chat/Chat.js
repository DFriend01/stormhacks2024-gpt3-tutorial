import React, { useState } from 'react';
import MessageList from './chat_children/MessageList/MessageList';
import Input from './chat_children/Input/Input';
import './Chat.css';

const Chat = ({initialMessages}) => {

  const [messages, setMessages] = useState(initialMessages);

  const addMessage = (sender, text, isLeft) => {
    setMessages([...messages, {sender, text, isLeft }]);
  };

  const onSendMessage = (text) => {
    let sender = "You";
    let isLeft = false;
    addMessage(sender, text, isLeft);
  }

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
};

export default Chat;

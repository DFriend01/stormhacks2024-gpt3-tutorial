import React, { useState } from 'react';
import OpenAI from "openai";
import MessageList from './chat_children/MessageList/MessageList';
import Input from './chat_children/Input/Input';
import get_gpt_response from '../../services/chat_completion';
import './Chat.css';

const Chat = ({initialMessages}) => {

  const [messages, setMessages] = useState(initialMessages);
  const [gptMessages, setGptMessages] = useState([]);

  const addMessages = (appendedMessages) => {
    setMessages([...messages, ...appendedMessages]);
  };

  const onSendMessage = (text) => {
    let pastMessages = gptMessages.concat([{role: "user", content: text}]);
    get_gpt_response(pastMessages).then((completion) => {
      let response = completion.choices[0].message.content;
      setGptMessages([...gptMessages, {role: "user", content: text}, {role: "assistant", content: response}]);
      addMessages([{sender: "You", text: text, isLeft: false}, {sender: "Assistant", text: response, isLeft: true}]);
    })
  }

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
};

export default Chat;

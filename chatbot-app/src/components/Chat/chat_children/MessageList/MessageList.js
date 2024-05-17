import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MessageBox from '../MessageBox/MessageBox';
import './MessageList.css';

const MessageList = ({initialMessages}) => {
  const [messages, setMessages] = useState(initialMessages);

  const addMessage = (sender, text, isLeft) => {
    setMessages([...messages, {sender, text, isLeft }]);
  };

  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <MessageBox key={index} sender={msg.sender} message={msg.text} isLeft={msg.isLeft} />
      ))}
      <button onClick={() => addMessage('Assistant', 'New message!', true)}>Add Left Message</button>
      <button onClick={() => addMessage('You', 'New message!', false)}>Add Right Message</button>
    </div>
  );
};

MessageList.propTypes = {
    initialMessages: PropTypes.arrayOf(PropTypes.object)
}

MessageList.defaultProps = {
    initialMessages: []
}

export default MessageList;

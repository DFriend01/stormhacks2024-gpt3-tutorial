import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MessageBox from '../MessageBox/MessageBox';
import './MessageList.css';

const MessageList = ({messages}) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <MessageBox key={index} sender={msg.sender} message={msg.text} isLeft={msg.isLeft} />
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf)
}

MessageList.defaultProps = {
  messages: []
}

export default MessageList;

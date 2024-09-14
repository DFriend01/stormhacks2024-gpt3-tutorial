import React from 'react';
import PropTypes from 'prop-types';
import './MessageBox.css';

const MessageBox = ({ sender, message, isLeft }) => {
  return (
    <div className={`message-box ${isLeft ? 'left' : 'right'}`}>
      <div className={"sender"}>{sender}</div>
      <div>{message}</div>
    </div>
  );
};

MessageBox.propTypes = {
  sender: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isLeft: PropTypes.bool,
};

MessageBox.defaultProps = {
  isLeft: true,
};

export default MessageBox;

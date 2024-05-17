import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type your message here..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

Input.propTypes = {
  onSendMessage: PropTypes.func,
};

Input.defaultProps = {
    onSendMessage: () => {}
};

export default Input;

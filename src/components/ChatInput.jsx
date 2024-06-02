import React, { useState } from 'react';
import { Button as BaseButton } from '@mui/base/Button';
import { Input as BaseInput } from '@mui/base/Input';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-input-container flex items-center shadow-md bg-white">
      <BaseInput 
        className="chat-input flex-grow p-2 outline-none bg-transparent border-none w-full" 
        placeholder="Type your message..." 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <BaseButton 
        className="send-button p-2 bg-white text-black shadow-button"
        onClick={handleSend}
      >
        →
      </BaseButton>
    </div>
  );
};

export default ChatInput;

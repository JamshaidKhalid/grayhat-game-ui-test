import React, { useState } from 'react';
import IconButton from '../components/IconButton';
import { StatusButton, ThreeDotButton } from '../components/Button';
import ChatInput from '../components/ChatInput';
import ChatBubble from '../components/ChatBubble';

const Homepage = () => {
  const [messages, setMessages] = useState([
    { message: "Hello, dudette!", timestamp: Date.now() - 60000, isUser: false }
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { message, timestamp: Date.now(), isUser: true }]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 space-y-4">
      <div className="flex space-x-4">
        <IconButton />
        <StatusButton />
        <ThreeDotButton />
      </div>
      <div className="messages-container mt-4 w-full max-w-md space-y-2">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.message} timestamp={msg.timestamp} isUser={msg.isUser} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Homepage;

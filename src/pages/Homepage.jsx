import { useState, useEffect, useRef } from 'react';
import IconButton from '../components/IconButton';
import { Button, ThreeDotButton } from '../components/Button';
import ChatInput from '../components/ChatInput';
import ChatBubble from '../components/ChatBubble';

const Homepage = () => {
  const [messages, setMessages] = useState([
    { message: "Hello, dudette!", timestamp: Date.now() - 60000, isUser: false }
  ]);
  const messagesEndRef = useRef(null);

  const handleSendMessage = (message) => {
    setMessages([...messages, { message, timestamp: Date.now(), isUser: true }]);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 space-y-4">
      <div className="flex space-x-4">
        <IconButton />
        <Button />
        <ThreeDotButton />
      </div>
      <div className="messages-container mt-4 w-full max-w-md overflow-y-auto flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.message} timestamp={msg.timestamp} isUser={msg.isUser} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Homepage;

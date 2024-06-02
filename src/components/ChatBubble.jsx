import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const ChatBubble = ({ message, timestamp, isUser }) => {
  const [timeAgo, setTimeAgo] = useState(dayjs(timestamp).fromNow());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(dayjs(timestamp).fromNow());
    }, 60000);
    return () => clearInterval(interval);
  }, [timestamp]);

  return (
    <div className={`chat-bubble-container ${isUser ? 'user' : 'bot'}`}>
      <div className="timestamp">{timeAgo}</div>
      <div className={`chat-bubble ${isUser ? 'user' : 'bot'}`}>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

ChatBubble.propTypes = {
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  isUser: PropTypes.bool
};

ChatBubble.defaultProps = {
  isUser: false
};

export default ChatBubble;

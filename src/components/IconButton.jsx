import { useState } from 'react';
import { Button as BaseButton } from '@mui/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

const IconButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <BaseButton
      onClick={handleClick}
      className={`icon-button ${isActive ? 'active' : ''}`}
    >
      {isActive ? (
        <FontAwesomeIcon icon={faMicrophoneSlash} className="icon" />
      ) : (
        <FontAwesomeIcon icon={faMicrophone} className="icon" />
      )}
    </BaseButton>
  );
};

export default IconButton;

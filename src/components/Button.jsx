import { useState } from 'react';
import { Button as BaseButton } from '@mui/base/Button';

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <BaseButton
      onClick={handleClick}
      className={`status-button ${isActive ? 'active' : ''}`}
    >
      Online (42)
    </BaseButton>
  );
};

const ThreeDotButton = () => {
  return (
    <BaseButton className="three-dot-button">
      ⋮
    </BaseButton>
  );
};

export { Button, ThreeDotButton };

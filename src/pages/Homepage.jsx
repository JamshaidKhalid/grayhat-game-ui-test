import React from 'react';
import IconButton from '../components/IconButton';
import { StatusButton, ThreeDotButton } from '../components/Button';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div className="flex space-x-4">
        <IconButton />
        <StatusButton />
        <ThreeDotButton />
      </div>
    </div>
  );
};

export default Homepage;

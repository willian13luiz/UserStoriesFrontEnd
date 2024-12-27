import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner: React.FC = () => {
  return <FaSpinner className="animate-spin text-2xl text-blue-600" />;
};

export default LoadingSpinner;
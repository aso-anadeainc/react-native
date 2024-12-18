import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const usePortraitOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  const updateOrientation = () => {
    const { width, height } = Dimensions.get('window');
    setIsPortrait(height >= width);
  };

  useEffect(() => {
    updateOrientation();
    const subscription = Dimensions.addEventListener('change', updateOrientation);
    return () => {
      subscription.remove();
    };
  }, []);

  return isPortrait;
};

export default usePortraitOrientation;

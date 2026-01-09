import { useState, useEffect } from 'react';

const useScreenScale = () => {
  const [scale, setScale] = useState(1);
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const { devicePixelRatio } = window;
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScale(devicePixelRatio || 1);
      setRatio(width / height);
    };

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //console.log('=======================> ' + scale + ', ' + ratio);

  return { scale, ratio };
};

export default useScreenScale;

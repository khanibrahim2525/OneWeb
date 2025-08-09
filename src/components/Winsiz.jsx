import React, { useState, useEffect } from 'react';

const Winsiz = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded shadow text-center">
      <h2 className="text-xl font-semibold mb-2">Current Window Size</h2>
      <p className="text-lg">Width: {windowSize.width}px</p>
      <p className="text-lg">Height: {windowSize.height}px</p>
    </div>
  );
};

export default Winsiz;

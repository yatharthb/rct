import React from 'react';

const SpriteDisplay = () => {
  const frameWidth = '20px'; 
  const frameHeight = '20px'; 

  const frameStyle = (backgroundPosition) => ({
    width: frameWidth,
    height: frameHeight,
    overflow: 'hidden',
    display: 'inline-block',
    margin: '5px',
    background: `url('/images/spritesheet.png') ${backgroundPosition}`,
    backgroundSize: 'auto 100%',
  });

  return (
    <div>
      <div style={frameStyle('0% 0%')}>
        {/* Empty div with background image */}
      </div>
      <div style={frameStyle('50% 0%')}>
        {/* Empty div with background image */}
      </div>
    </div>
  );
};

export default SpriteDisplay;

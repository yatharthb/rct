import React from 'react';

const SpriteDisplay = () => {
  const frameWidth = 20;
  const frameHeight = 20;
  const halfWidth = 119; // Half the width of the sprite sheet

  const frameStyle = (xOffset) => ({
    width: `${frameWidth}px`,
    height: `${frameHeight}px`,
    overflow: 'hidden',
    display: 'inline-block',
    margin: '5px',
    position: 'relative',
  });

  const imgStyle = (xOffset) => ({
    position: 'absolute',
    left: `${-xOffset}px`,
  });

  const spriteSheetUrl = '/images/spritesheet.png'; // Use the direct URL in the images folder

  return (
    <div>
      <div style={frameStyle(0)}>
        <img src={spriteSheetUrl} alt="frame 1" style={imgStyle(0)} />
      </div>
      <div style={frameStyle(halfWidth)}>
        <img src={spriteSheetUrl} alt="frame 2" style={imgStyle(halfWidth)} />
      </div>
    </div>
  );
};

export default SpriteDisplay;

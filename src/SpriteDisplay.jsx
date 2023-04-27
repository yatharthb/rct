import React from 'react';

const SpriteDisplay = () => {
  const spriteSheetUrl = '/images/spritesheet.png'; // Use the direct URL in the images folder

  return (
    <div>
      <img src={spriteSheetUrl} alt="Runner sprite sheet" />
    </div>
  );
};

export default SpriteDisplay;

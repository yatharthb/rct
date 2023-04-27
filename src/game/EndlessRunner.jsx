import React, { useRef, useEffect } from 'react';
import './EndlessRunner.css';
import spriteSheet from './runner-spritesheet.png'; // Import the sprite sheet

const EndlessRunner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let requestId;
    let isJumping = false;
    let isGameOver = false;

    const player = {
      x: 50,
      y: canvas.height - 30,
      width: 20,
      height: 20,
      velocityY: 0,
      gravity: 0.5,
    };

    const obstacle = {
      x: canvas.width,
      y: canvas.height - 20,
      width: 20,
      height: 20,
      speed: 4,
    };

    const jump = () => {
      if (!isJumping) {
        isJumping = true;
        player.velocityY = -12;
      }
    };

    const playerSprite = new Image();
    playerSprite.src = spriteSheet;

    // Initialize frameRate for animations
    let frameRate = 0;

    const update = () => {
      if (isJumping) {
        player.velocityY += player.gravity;
        player.y += player.velocityY;
        if (player.y >= canvas.height - 30) {
          player.y = canvas.height - 30;
          isJumping = false;
        }
      }

      obstacle.x -= obstacle.speed;
      if (obstacle.x < -20) {
        obstacle.x = canvas.width;
      }

      if (
        player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y
      ) {
        isGameOver = true;
      }
      frameRate++;
    };


    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let frameStartX;

      // Determine the frameStartX based on the player's state
      if (isJumping) {
        frameStartX = 144; // Jumping frame
      } else if (frameRate % 12 < 6) {
        frameStartX = 0; // Idle frame
      } else {
        frameStartX = 262; // Running frame
      }

      // Draw the sprite based on the frameStartX value
      ctx.drawImage(playerSprite, frameStartX, 0, player.width, player.height, player.x, player.y, player.width, player.height);

      ctx.fillStyle = 'red';
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    };

    const gameLoop = () => {
      if (!isGameOver) {
        update();
        draw();
        requestId = requestAnimationFrame(gameLoop);
      }
    };

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        jump();
      }
    });

    // Start the game loop only after the sprite sheet is loaded
    playerSprite.onload = () => {
      gameLoop();
    };

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="EndlessRunner">
      <h2>Endless Runner</h2>
      <canvas ref={canvasRef} width="500" height="150"></canvas>
    </div>
  );
};

export default EndlessRunner;

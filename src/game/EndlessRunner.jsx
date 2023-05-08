import React, { useRef, useEffect, useState } from 'react';
import './EndlessRunner.css';
import frame1 from './frame1.png'; // Import the first frame
import frame2 from './frame2.png'; // Import the second frame

const EndlessRunner = () => {
  const canvasRef = useRef(null);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let requestId;
    let isJumping = false;
    let isGameOver = false;

    const player = {
      x: 50,
      y: canvas.height - 60,
      width: 40,
      height: 60,
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

    const playerSprite1 = new Image();
    playerSprite1.src = frame1;

    const playerSprite2 = new Image();
    playerSprite2.src = frame2;

    let frameRate = 0;

    const update = () => {
      if (isJumping) {
        player.velocityY += player.gravity;
        player.y += player.velocityY;
        if (player.y >= canvas.height - 60) {
          player.y = canvas.height - 60;
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

      let playerSprite;

      if (frameRate % 12 < 6) {
        playerSprite = playerSprite1;
      } else {
        playerSprite = playerSprite2;
      }

      ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);

      ctx.fillStyle = 'red';
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    };

    const gameLoop = () => {
      if (!isGameOver) {
        update();
        draw();
        requestId = requestAnimationFrame(gameLoop);
      } else {
        setGameRunning(false);
      }
    };

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        jump();
      }
    });

    playerSprite1.onload = gameLoop;
    playerSprite2.onload = gameLoop;

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [gameRunning]);

 const restartGame = () => {
if (!gameRunning) {
setGameRunning(true);
}
};
return (
  <div className="EndlessRunner">
    <h2>Endless Runner</h2>
    <canvas ref={canvasRef} width="500" height="150"></canvas>
    <button className="restart-btn" onClick={restartGame}>Restart Game</button>
  </div>
);
};

export default EndlessRunner;

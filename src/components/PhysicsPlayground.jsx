import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';
import './PhysicsPlayground.css';

const PhysicsPlayground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
      },
    });

    const ground = Bodies.rectangle(400, 590, 800, 20, { isStatic: true });
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(440, 50, 80, 80);
const boxC = Bodies.rectangle(200, 200, 40, 40);
const boxD = Bodies.rectangle(150, 50, 40, 40);

const boxE = Bodies.rectangle(100, 300, 60, 90);
const boxF = Bodies.rectangle(300, 400, 120, 50);
const boxG = Bodies.rectangle(600, 350, 70, 110);
const boxH = Bodies.rectangle(700, 100, 100, 60);
const boxI = Bodies.rectangle(500, 450, 80, 40);
const boxJ = Bodies.rectangle(250, 150, 50, 70);
const boxK = Bodies.rectangle(650, 200, 90, 50);
const boxL = Bodies.rectangle(350, 300, 110, 80);
const boxM = Bodies.rectangle(50, 480, 60, 50);
const boxN = Bodies.rectangle(750, 530, 40, 100);

// Add all the boxes to the world
World.add(engine.world, [ground, boxA, boxB, boxC, boxD, boxE, boxF, boxG, boxH, boxI, boxJ, boxK, boxL, boxM, boxN]);

    // Add mouse controls
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Engine.run(engine);
    Render.run(render);

    return () => {
      // Clean up when the component is unmounted
      Render.stop(render);
      Engine.clear(engine);
    };
  }, []);

  return <canvas ref={canvasRef} className="physics-playground" width="800" height="600"></canvas>;
};

export default PhysicsPlayground;

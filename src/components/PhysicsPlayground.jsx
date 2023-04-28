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

    World.add(engine.world, [ground, boxA, boxB]);

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

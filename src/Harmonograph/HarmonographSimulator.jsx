import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-input-slider'; // Import the Slider component
import './HarmonographSimulator.css'; // Import the CSS file

const HarmonographSimulator = () => {
  const canvasRef = useRef(null);
  const [params, setParams] = useState({
    a1: 150,
    f1: 3,
    f2: 2,
    a2: 100,
    f3: 4,
    f4: 3,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const drawPoint = (t, params) => {
      const x =
        centerX +
        params.a1 * Math.sin(params.f1 * t + Math.PI / 16) * Math.exp(-0.02 * t) +
        params.a2 * Math.sin(params.f2 * t + (3 * Math.PI) / 2) * Math.exp(-0.01 * t);

      const y =
        centerY +
        params.a1 * Math.cos(params.f1 * t + Math.PI / 16) * Math.exp(-0.02 * t) +
        params.a2 * Math.cos(params.f2 * t + (3 * Math.PI) / 2) * Math.exp(-0.01 * t);

      ctx.fillStyle = 'black';
      ctx.fillRect(x, y, 1, 1);
    };

    const renderHarmonograph = (params) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let t = 0; t < 200; t += 0.02) {
        drawPoint(t, params);
      }
    };

    renderHarmonograph(params);
  }, [params]);

  const updateParams = (key, value) => {
    setParams((prevParams) => ({
      ...prevParams,
      [key]: parseFloat(value),
    }));
  };

  return (
    <div>
      <h2>Harmonograph Simulator</h2>
      <div className="sliders-container">
        {Object.keys(params).map((key) => (
          <div key={key} className="slider-item">
            <label>{key}:</label>
            <Slider
              axis="x"
              x={params[key]}
              onChange={({ x }) => updateParams(key, x)}
              styles={{
                track: {
                  backgroundColor: '#ddd',
                },
                active: {
                  backgroundColor: '#5fcf80',
                },
                thumb: {
                  width: 20,
                  height: 20,
                  backgroundColor: '#5fcf80',
                  borderRadius: 10,
                },
              }}
            />
          </div>
        ))}
      </div>
      <canvas ref={canvasRef} width="800" height="800"></canvas>
    </div>
  );
};

export default HarmonographSimulator;

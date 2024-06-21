import React, { useRef, useState, useEffect } from 'react';

import "./Circle.scss";

const Circle = () => {
  const trackerRef = useRef(null);
  const [speed, setSpeed] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(20); 
  const [animationName, setAnimationName] = useState('autoRunForward');
  const [direction, setDirection] = useState('');
  const [rotateXStart, setRotateXStart] = useState('-40deg');
  const [rotateXEnd, setRotateXEnd] = useState('-40deg');
  const [lastMousePosition, setLastMousePosition] = useState(null);
  const [lastTimestamp, setLastTimestamp] = useState(null);

   useEffect(() => {
    const handleMouseMove = (event) => {
      const currentTimestamp = event.timeStamp;
      const currentMousePosition = { x: event.clientX, y: event.clientY };

      if (lastMousePosition && lastTimestamp) {
        const distance = Math.sqrt(
          Math.pow(currentMousePosition.x - lastMousePosition.x, 2) +
          Math.pow(currentMousePosition.y - lastMousePosition.y, 2)
        );

        const timeElapsed = currentTimestamp - lastTimestamp;
        const currentSpeed = (distance / timeElapsed) * 1000; // Speed in pixels per second

        const newAnimationDuration = Math.max(2, Math.min(20, 20 - (currentSpeed / 100)));
        setAnimationDuration(newAnimationDuration);

        setSpeed(currentSpeed);

        // Determine direction
        const deltaX = currentMousePosition.x - lastMousePosition.x;
        const deltaY = currentMousePosition.y - lastMousePosition.y;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) {
            setDirection('Right');
            setAnimationName('autoRunBackward');
          } else {
            setDirection('Left');
            setAnimationName('autoRunForward');
          }
        } else {
          if (deltaY > 0) {
            setDirection('Down');
            const newRotateX = Math.max(-40, -40 + (currentSpeed / 25));
            setRotateXStart(`${newRotateX}deg`);
            setRotateXEnd(`${newRotateX + 40}deg`);
          } else {
            setDirection('Up');
            const newRotateX = Math.min(40, 40 - (currentSpeed / 25));
            setRotateXStart(`${newRotateX}deg`);
            setRotateXEnd(`${newRotateX - 40}deg`);
          }
        }
      }

      setLastMousePosition(currentMousePosition);
      setLastTimestamp(currentTimestamp);
    };

    const tracker = trackerRef.current;
    if (tracker) {
      tracker.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (tracker) {
        tracker.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [lastMousePosition, lastTimestamp]);

  return (
     <div className="banner" ref={trackerRef} >
            <div className="slider" 
            style={{
               '--quantity': 10,
               '--animation-duration': `${animationDuration}s`,
               '--animation-name': animationName,
               '--rotate-x-start': rotateXStart,
               '--rotate-x-end': rotateXEnd,
             }}>
                <div className="item" style={{ '--position': 1 }}></div>
                <div className="item" style={{ '--position': 2 }}></div>
                <div className="item" style={{ '--position': 3 }}></div>
                <div className="item" style={{ '--position': 4 }}></div>
                <div className="item" style={{ '--position': 5 }}></div>
                <div className="item" style={{ '--position': 6 }}></div>
                <div className="item" style={{ '--position': 7 }}></div>
                <div className="item" style={{ '--position': 8 }}></div>
                <div className="item" style={{ '--position': 9 }}></div>
                <div className="item" style={{ '--position': 10 }}></div>
            </div>
            {/* <div>Speed: {speed.toFixed(2)} pixels/second</div>
            <div>Direction: {direction}</div> */}
    </div>
  );
};

export default Circle;

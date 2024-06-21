import React, { useRef, useState, useEffect } from 'react';
import "./Circle.scss";

interface Position {
  x: number;
  y: number;
}

const Circle: React.FC = () => {
  const trackerRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState<number>(0);
  const [animationDuration, setAnimationDuration] = useState<number>(20); 
  const [animationName, setAnimationName] = useState<string>('autoRunForward');
  const [direction, setDirection] = useState<string>('');
  const [rotateXStart, setRotateXStart] = useState<string>('-40deg');
  const [rotateXEnd, setRotateXEnd] = useState<string>('-40deg');
  const [lastPosition, setLastPosition] = useState<Position | null>(null);
  const [lastTimestamp, setLastTimestamp] = useState<number | null>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent | TouchEvent) => {
      const currentTimestamp = event.timeStamp;
      let currentPosition: Position | undefined;
      
      if ('clientX' in event) {
        currentPosition = { x: event.clientX, y: event.clientY };
      } else if ('touches' in event && event.touches.length > 0) {
        currentPosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }

      if (currentPosition && lastPosition && lastTimestamp) {
        const distance = Math.sqrt(
          Math.pow(currentPosition.x - lastPosition.x, 2) +
          Math.pow(currentPosition.y - lastPosition.y, 2)
        );

        const timeElapsed = currentTimestamp - lastTimestamp;
        const currentSpeed = (distance / timeElapsed) * 1000; // Speed in pixels per second

        const newAnimationDuration = Math.max(2, Math.min(20, 20 - (currentSpeed / 100)));
        setAnimationDuration(newAnimationDuration);

        setSpeed(currentSpeed);

        // Determine direction
        const deltaX = currentPosition.x - lastPosition.x;
        const deltaY = currentPosition.y - lastPosition.y;

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

      if (currentPosition) {
        setLastPosition(currentPosition);
        setLastTimestamp(currentTimestamp);
      }
    };

    const tracker = trackerRef.current;
    if (tracker) {
      tracker.addEventListener('mousemove', handleMove);
      tracker.addEventListener('touchmove', handleMove);
    }

    return () => {
      if (tracker) {
        tracker.removeEventListener('mousemove', handleMove);
        tracker.removeEventListener('touchmove', handleMove);
      }
    };
  }, [lastPosition, lastTimestamp]);

  return (
    <div className="banner" ref={trackerRef}>
      <div 
        className="slider"
        style={{
          '--quantity': 9,
          '--animation-duration': `${animationDuration}s`,
          '--animation-name': animationName,
          '--rotate-x-start': rotateXStart,
          '--rotate-x-end': rotateXEnd,
        } as React.CSSProperties}
      >
        {[...Array(10)].map((_, index) => (
          <div key={index} className="item" style={{ '--position': index + 1 } as React.CSSProperties}></div>
        ))}
      </div>
      {/* <div>Speed: {speed.toFixed(2)} pixels/second</div>
      <div>Direction: {direction}</div> */}
    </div>
  );
};

export default Circle;

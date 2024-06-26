import React, { useEffect, useRef } from 'react';
import './CursorEffect.scss';

const CursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailLength = 50; // 彩带长度
  const ribbonWidth = 3; // 彩带宽度

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: { x: number, y: number, alpha: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x: number, y: number) => {
      particles.push({ x, y, alpha: 1 });
      if (particles.length > trailLength) {
        particles.shift();
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = ribbonWidth;
      particles.forEach((particle, index) => {
        particle.alpha -= 0.02;
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        } else {
          ctx.strokeStyle = `rgba(0, 255, 165, ${particle.alpha})`;
          if (index > 0) {
            ctx.beginPath();
            ctx.moveTo(particles[index - 1].x, particles[index - 1].y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
          }
        }
      });
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      createParticle(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      createParticle(touch.clientX, touch.clientY);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-effect-canvas"></canvas>;
};

export default CursorEffect;

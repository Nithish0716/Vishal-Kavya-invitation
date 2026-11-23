import React, { useEffect, useRef } from 'react';

/**
 * PetalCanvas: Renders realistic tumbling South Indian wedding jasmine (மல்லிகைப் பூ)
 * and soft rose petals drifting gently across the screen with natural wind physics.
 */
export default function PetalCanvas({ className = "pointer-events-none fixed inset-0 z-10" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalColors = [
      // Creamy Jasmine Petal (மணம் கமழும் மல்லிகை)
      { fill: 'rgba(255, 253, 246, 0.94)', stroke: 'rgba(212, 175, 55, 0.38)', type: 'jasmine' },
      { fill: 'rgba(255, 249, 233, 0.90)', stroke: 'rgba(176, 141, 87, 0.30)', type: 'jasmine' },
      // Soft Rose / Marigold accent petal
      { fill: 'rgba(255, 218, 218, 0.78)', stroke: 'rgba(212, 175, 55, 0.35)', type: 'rose' },
      { fill: 'rgba(250, 208, 196, 0.70)', stroke: 'rgba(176, 141, 87, 0.28)', type: 'rose' },
      // Shimmering Golden Speckle
      { fill: 'rgba(255, 238, 170, 0.85)', stroke: 'rgba(212, 175, 55, 0.50)', type: 'goldDust' }
    ];

    const count = window.innerWidth < 768 ? 24 : 48;
    const petals = [];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.9 + 0.55,
        speedX: Math.random() * 0.7 - 0.35,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        flipSpeed: Math.random() * 0.03 + 0.015,
        flipAngle: Math.random() * Math.PI,
        swing: Math.random() * 2,
        swingSpeed: Math.random() * 0.02 + 0.01,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
      });
    }

    let time = 0;

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      
      // 3D tumbling illusion
      const flipScale = Math.sin(p.flipAngle);
      ctx.scale(flipScale, 1);

      ctx.fillStyle = p.color.fill;
      ctx.strokeStyle = p.color.stroke;
      ctx.lineWidth = 0.7;

      ctx.beginPath();
      if (p.color.type === 'jasmine') {
        // Delicate teardrop shape of a jasmine petal
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.65, -p.size * 0.45, p.size * 0.65, p.size * 0.65, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.65, p.size * 0.65, -p.size * 0.65, -p.size * 0.45, 0, -p.size);
      } else if (p.color.type === 'goldDust') {
        ctx.arc(0, 0, p.size * 0.28, 0, Math.PI * 2);
      } else {
        // Gentle rose petal
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(p.size, -p.size * 0.5, p.size * 0.5, p.size);
        ctx.quadraticCurveTo(0, p.size * 0.7, -p.size * 0.5, p.size);
        ctx.quadraticCurveTo(-p.size, -p.size * 0.5, 0, 0);
      }

      ctx.fill();
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time * p.swingSpeed + p.swing) * 0.65;
        p.angle += p.rotationSpeed;
        p.flipAngle += p.flipSpeed;

        if (p.y > height + 25) {
          p.y = -25;
          p.x = Math.random() * width;
        }
        if (p.x > width + 25) p.x = -25;
        if (p.x < -25) p.x = width + 25;

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}

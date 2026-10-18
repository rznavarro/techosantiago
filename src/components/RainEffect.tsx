import { useEffect, useRef } from 'react';

interface RainEffectProps {
  opacity?: number;
  className?: string;
}

export function RainEffect({ opacity = 0.2, className = '' }: RainEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Raindrop particles - moderate count for high performance
    const count = Math.min(Math.floor(width / 18), 70);
    const drops = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 18 + 12,
      speed: Math.random() * 6 + 7,
      alpha: Math.random() * 0.18 + 0.07,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        ctx.strokeStyle = `rgba(215, 235, 245, ${drop.alpha})`;
        ctx.beginPath();
        // Slanted rain angle
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 2, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x += 1.2;

        if (drop.y > height) {
          drop.y = -drop.length;
          drop.x = Math.random() * width;
        }
        if (drop.x > width) {
          drop.x = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}

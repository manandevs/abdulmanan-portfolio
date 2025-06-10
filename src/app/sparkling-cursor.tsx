"use client";

import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

type Sparkle = {
  id: string;
  x: number;
  y: number;
  size: number;
  brightness: number;
  delay: number;
  duration: number;
};

const INTERVAL = 1000 / 20;

export default function CustomCursorWithParticles() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const sparkleId = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const now = Date.now();
      if (now - lastTime.current > INTERVAL) {
        lastTime.current = now;

        const count = 2 + Math.floor(Math.random() * 3);
        const newSparkles = Array.from({ length: count }, () => {
          const id = `s-${sparkleId.current++}`;
          const offsetX = (Math.random() - 0.5) * 20;
          const offsetY = (Math.random() - 0.5) * 20;
          const size = Math.random() * 3 + 1;
          const brightness = Math.random() * 40 + 60;
          const delay = Math.random() * 100;
          const duration = Math.random() * 1000 + 800;

          // Remove sparkle after animation
          setTimeout(() => {
            setSparkles((s) => s.filter((sp) => sp.id !== id));
          }, duration + delay);

          return {
            id,
            x: e.clientX + offsetX,
            y: e.clientY + offsetY,
            size,
            brightness,
            delay,
            duration,
          };
        });

        setSparkles((s) => [...s, ...newSparkles]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    gsap.to(".animate-sparkle-fade",{
      
    })
  }, [])
  

  return (
    <>
      {/* Cursor Core with Glow */}
      <div
        className="fixed z-50 pointer-events-none w-6 h-6 bg-white rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Sparkles */}
      {sparkles.map(({ id, x, y, size, brightness, delay, duration }) => (
        <div
          key={id}
          className="fixed pointer-events-none z-40 animate-sparkle-fade"
          style={{
            left: x,
            top: y,
            width: size,
            height: size,
            backgroundColor: `hsl(60, 100%, ${brightness}%)`,
            boxShadow: `0 0 ${size * 3}px hsl(60, 100%, ${brightness}%)`,
            animationDelay: `${delay}ms`,
            animationDuration: `${duration}ms`,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Animation keyframes via Tailwind CSS (global) */}
      <style jsx global>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
        }
      `}</style>
    </>
  );
}

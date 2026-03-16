"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  colorVar: string;
  duration: number;
  delay: number;
};

// Generate deterministic particles based on an index so server/client match perfectly if needed
// However, since we only want to show them after hydration to avoid mismatches, we use an effect.
function generateParticles(count: number): Particle[] {
  const colors = ["var(--aurora-1)", "var(--aurora-2)", "var(--aurora-3)"];
  
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    // Use pseudo-random deterministic values for initial render stability
    x: (Math.sin(i * 123.45) * 0.5 + 0.5) * 100, // 0 to 100%
    y: (Math.cos(i * 321.65) * 0.5 + 0.5) * 100, // 0 to 100%
    size: (Math.sin(i * 11.23) * 0.5 + 0.5) * 6 + 2, // 2px to 8px
    colorVar: colors[i % colors.length],
    duration: (Math.sin(i * 44.55) * 0.5 + 0.5) * 20 + 20, // 20s to 40s
    delay: (Math.cos(i * 99.11) * 0.5 + 0.5) * 5, // 0s to 5s delay
  }));
}

export default function FloatingParticles({ count = 40 }: { count?: number }) {
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setIsMounted(true);
    setParticles(generateParticles(count));
  }, [count]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.colorVar,
            boxShadow: `0 0 ${p.size * 2}px ${p.colorVar}`,
          }}
          initial={{ 
            opacity: 0, 
            y: 0,
            x: 0 
          }}
          animate={{
            opacity: [0, 0.4, 0.8, 0.4, 0],
            y: [0, -200, -400],
            x: [0, (p.id % 2 === 0 ? 100 : -100), (p.id % 3 === 0 ? -50 : 50)]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
        />
      ))}
    </div>
  );
}

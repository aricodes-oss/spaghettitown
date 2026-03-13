'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface SparkleProps {
  delay: number;
  x: string;
  y: string;
  size?: number;
  scale?: number;
}

export function generateSparkles(count: number) {
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);
  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const baseX = ((col + 0.5) / cols) * 100;
    const baseY = ((row + 0.5) / rows) * 100;
    const jitter = 4; // ±4%
    return {
      x: `${baseX + (Math.random() * 2 - 1) * jitter}%`,
      y: `${baseY + (Math.random() * 2 - 1) * jitter}%`,
      scale: 0.5 + Math.random() * 1.5,
      delay: Math.random() * 4,
    };
  });
}

export function Sparkle({ delay, x, y, size = 16, scale = 1 }: SparkleProps) {
  const scaledSize = size * scale;
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: scaledSize,
        height: scaledSize,
        transformOrigin: 'center',
      }}
      animate={{ scale: [0, 1, 0] }}
      transition={{
        duration: 0.6,
        delay,
        repeat: Infinity,
        repeatDelay: delay,
        ease: 'easeInOut',
      }}
    >
      <Image src="/sparkle.svg" width={scaledSize} height={scaledSize} alt="" />
    </motion.div>
  );
}

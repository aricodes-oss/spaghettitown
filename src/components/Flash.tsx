'use client';

import type { ReactNode } from 'react';

export interface FlashProps {
  from: string;
  to: string;
  speed?: number;
  children: ReactNode;
}

export default function Flash({ from, to, speed = 1, children }: FlashProps) {
  const animationName = '__flash';
  return (
    <span
      style={{
        animation: `${animationName} ${speed}s steps(1) infinite`,
        color: from,
      }}
    >
      <style>{`@keyframes ${animationName} { 50% { color: ${to}; } }`}</style>
      {children}
    </span>
  );
}

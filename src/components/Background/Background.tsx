'use client';

import { useMemo } from 'react';

import styles from './Background.module.css';
import { Sparkle, generateSparkles } from './Sparkle';

interface BackgroundProps {
  sparkles?: number;
}

export function Background({ sparkles = 24 }: BackgroundProps) {
  const sparkleList = useMemo(() => generateSparkles(sparkles), [sparkles]);

  return (
    <div className={styles.background}>
      {sparkleList.map((s, i) => (
        <Sparkle key={i} x={s.x} y={s.y} delay={s.delay} scale={s.scale} />
      ))}
    </div>
  );
}

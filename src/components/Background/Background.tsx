'use client';

import { useMemo } from 'react';
import { useMatches } from '@mantine/core';

import styles from './Background.module.css';
import { Sparkle, generateSparkles } from './Sparkle';

interface BackgroundProps {
  sparkles?: number;
}

export function Background({ sparkles }: BackgroundProps) {
  const defaultSparkles = useMatches({ base: 12, sm: 24, md: 36, lg: 48, xl: 60 });
  const count = sparkles ?? defaultSparkles;
  const sparkleList = useMemo(() => generateSparkles(count), [count]);

  return (
    <div className={styles.background}>
      {sparkleList.map((s, i) => (
        <Sparkle key={i} x={s.x} y={s.y} delay={s.delay} scale={s.scale} />
      ))}
    </div>
  );
}

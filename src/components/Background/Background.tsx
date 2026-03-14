'use client';

import { useMatches } from '@mantine/core';
import { useMemo } from 'react';

import styles from './Background.module.scss';
import { Sparkle, generateSparkles } from './Sparkle';

interface BackgroundProps {
  sparkles?: number;
}

export function Background({ sparkles }: BackgroundProps) {
  const defaultSparkles = useMatches({ base: 64, sm: 128, md: 256, lg: 300, xl: 360 });
  const count = sparkles ?? defaultSparkles;
  const sparkleList = useMemo(() => generateSparkles(count), [count]);

  return (
    <div className={styles.background}>
      {sparkleList.map((s, i) => (
        <Sparkle key={i} x={s.x} y={s.y} delay={s.delay} scale={s.scale} duration={1.2} />
      ))}
    </div>
  );
}

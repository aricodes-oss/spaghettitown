'use client';

import type { ReactNode } from 'react';

import styles from './Ticker.module.scss';

export function Ticker({ children, speed = 50 }: { children: ReactNode; speed?: number }) {
  return (
    <div className={styles.ticker}>
      <marquee scrolldelay={speed}>{children}</marquee>
    </div>
  );
}

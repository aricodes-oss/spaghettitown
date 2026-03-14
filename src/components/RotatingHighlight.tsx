'use client';

import { useMantineTheme } from '@mantine/core';
import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

export interface RotatingHighlightProps {
  content: string;
  delay?: number;
  duration?: number;
  color?: string;
}

export default function RotatingHighlight({
  content,
  delay = 750,
  duration = 1.0,
  color,
  ...props
}: RotatingHighlightProps) {
  const theme = useMantineTheme();
  const [highlighted, setHighlighted] = useState(0);
  const segments = useMemo(() => content.split(''), [content]);

  // Default to pink
  if (!color) {
    color = theme.colors.pink[0];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (highlighted >= segments.length - 1) {
        setHighlighted(0);
      } else {
        setHighlighted(highlighted + 1);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [highlighted, setHighlighted, segments.length, delay]);

  const styles = { display: 'inline-block' };

  return segments.map((char, idx) => (
    <motion.span
      style={idx === highlighted ? { color, ...styles } : styles}
      animate={{ rotate: [0, 360] }}
      transition={{ duration, delay: idx * delay, repeatDelay: 1.0, repeat: Infinity }}
      key={idx}
      {...props}
    >
      {char}
    </motion.span>
  ));
}

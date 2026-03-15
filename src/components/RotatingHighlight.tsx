'use client';

import { useMantineTheme } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';

export interface RotatingHighlightProps {
  content: string;
  delay?: number;
  color?: string;
  reverse?: boolean;
}

export default function RotatingHighlight({
  content,
  delay = 750,
  color,
  reverse = false,
  ...props
}: RotatingHighlightProps) {
  const theme = useMantineTheme();
  const segments = useMemo(() => content.split(''), [content]);
  const [highlighted, setHighlighted] = useState(reverse ? segments.length - 1 : 0);

  // Default to pink
  if (!color) {
    color = theme.colors.pink[0];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (reverse) {
        setHighlighted(highlighted <= 0 ? segments.length - 1 : highlighted - 1);
      } else {
        setHighlighted(highlighted >= segments.length - 1 ? 0 : highlighted + 1);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [highlighted, setHighlighted, segments.length, delay, reverse]);

  const styles = { display: 'inline-block' };

  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      {segments.map((char, idx) => (
        <span style={idx === highlighted ? { color, ...styles } : styles} key={idx} {...props}>
          {char}
        </span>
      ))}
    </span>
  );
}

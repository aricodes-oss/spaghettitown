'use client';

import { Box, Stack, Text } from '@mantine/core';

import styles from './ViewCounter.module.scss';

interface ViewCounterProps {
  visitors: number;
}

export function ViewCounter({ visitors }: ViewCounterProps) {
  const digits = visitors.toString().padStart(6, '0').split('');

  return (
    <Stack justify="center" align="center" gap={0}>
      <Text size="xs" mb={0}>
        You are visitor number:
      </Text>
      <Box className={styles.root}>
        {digits.map((digit, idx) => (
          <span className={styles.cell} key={idx}>
            {digit}
          </span>
        ))}
      </Box>
    </Stack>
  );
}

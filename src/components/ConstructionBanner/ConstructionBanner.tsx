'use client';

import { Box, Group, Text } from '@mantine/core';
import { IconTrafficCone } from '@tabler/icons-react';

import styles from './ConstructionBanner.module.scss';

export function ConstructionBanner() {
  const coneProps = { size: 32, color: '#ff7c01' };

  return (
    <Box className={styles.root} ta="center" p={8} mt={8}>
      <Group justify="center" align="center" wrap="nowrap" gap={2}>
        <IconTrafficCone {...coneProps} className={styles.coneLeft} />
        <Text fw={700} size="sm" lh={1}>
          PAGE UNDER CONSTRUCTION
        </Text>
        <IconTrafficCone {...coneProps} className={styles.coneRight} />
      </Group>
    </Box>
  );
}

'use client';

import { Anchor, Box, Group, Stack } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Desktop.module.scss';
import { type NavProps } from './Nav';

export default function Desktop({ links }: NavProps) {
  const pathname = usePathname();
  return (
    <Box className={styles.nav} p={{ base: 4, md: 8 }}>
      <Stack gap={2}>
        {links.map(({ href, label }) => (
          <Anchor
            key={href}
            component={Link}
            href={href}
            c="white"
            underline={href === pathname ? 'always' : 'hover'}
            size="xs"
            fw={700}
          >
            <Group justify="space-between">
              <span>{'=>'}</span> <span>{label}</span> <span>{'<='}</span>
            </Group>
          </Anchor>
        ))}
      </Stack>
    </Box>
  );
}

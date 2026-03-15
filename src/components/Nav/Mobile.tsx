'use client';

import { Anchor, Collapse, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Mobile.module.scss';
import { NavProps } from './Nav';

export default function Mobile({ links }: NavProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();
  return (
    <Stack align="center" gap={0} className={styles.nav}>
      <Text c="white" size="xs" onClick={toggle}>
        Links {opened ? '^' : 'v'}
      </Text>
      <Collapse in={opened} px={4}>
        {links.map(({ href, label }) => (
          <Anchor
            key={href}
            component={Link}
            href={href}
            c="white"
            underline={href === pathname ? 'always' : 'never'}
            onClick={toggle}
          >
            <Text>{label}</Text>
          </Anchor>
        ))}
      </Collapse>
    </Stack>
  );
}

'use client';

import { Anchor, Box, Collapse, Group, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import styles from './Nav.module.scss';

const links = [
  { label: 'HOME', href: '/' },
  // { label: 'DA BAND', href: '/' },
  { label: 'GIGZ', href: '/shows' },
  { label: 'PIX', href: 'https://www.instagram.com/choosingclarityband_/' },
  { label: 'GUESTBOOK', href: '/guestbook' },
];

interface NavLinksProps {
  pathname: string;
  onClick?: () => void;
  size?: string;
}

function NavLinks({ pathname, onClick, size = 'xs' }: NavLinksProps) {
  return links.map(({ href, label }) => (
    <Anchor
      key={href}
      component={Link}
      href={href}
      c="white"
      underline={href === pathname ? 'always' : 'hover'}
      size={size}
      fw={700}
      onClick={onClick}
    >
      <Group justify="space-between">
        <span>{'=>'}</span> <span>{label}</span> <span>{'<='}</span>
      </Group>
    </Anchor>
  ));
}

export function Nav() {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile nav */}
      <Stack align="center" gap={0} className={styles.nav} hiddenFrom="md">
        <Text c="white" size="xs" onClick={toggle}>
          Links {opened ? '^' : 'v'}
        </Text>
        <Collapse in={opened} px={4}>
          <NavLinks pathname={pathname} onClick={toggle} size="md" />
        </Collapse>
      </Stack>

      {/* Desktop nav */}
      <Box className={styles.desktopNav} p={{ base: 4, md: 8 }} visibleFrom="md">
        <Stack gap={2}>
          <NavLinks pathname={pathname} />
        </Stack>
      </Box>
    </>
  );
}

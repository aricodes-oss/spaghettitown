'use client';

import { Anchor, Title } from '@mantine/core';
import Link from 'next/link';

import RotatingHighlight from '../RotatingHighlight';
import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <Anchor component={Link} href="/" underline="never" c="white">
        <Title order={1}>
          <RotatingHighlight content="!!!" />
          Choosing Clarity
          <RotatingHighlight content="!!!" />
        </Title>
      </Anchor>
    </div>
  );
}

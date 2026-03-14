'use client';

import { Anchor, Box, Flex, Title } from '@mantine/core';
import { IconFlameFilled } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import RotatingHighlight from '../RotatingHighlight';
import styles from './Header.module.scss';

const MotionFlame = motion.create(IconFlameFilled);

const ORANGE = '#CC5500';
const WHITE = '#FFFFFF';

const flickerKeyframes = [
  ORANGE,
  WHITE,
  ORANGE,
  WHITE,
  ORANGE,
  WHITE,
  WHITE,
  ORANGE,
  WHITE,
  ORANGE,
  WHITE,
  WHITE,
  ORANGE,
  WHITE,
  ORANGE,
];

export function Header() {
  const flameProps = {
    size: 40,
  };

  return (
    <>
      <Flex
        direction="row"
        justify={{ base: 'center', md: 'space-between' }}
        align="center"
        px={{ base: 0, md: 32 }}
      >
        <Box visibleFrom="md" component="span" style={{ lineHeight: 0 }}>
          <MotionFlame
            {...flameProps}
            animate={{ color: flickerKeyframes }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
        </Box>

        <Anchor component={Link} href="/" underline="never" c="white">
          <Title order={1} className={styles.header}>
            <RotatingHighlight content="!!!" />
            Choosing Clarity
            <RotatingHighlight content="!!!" reverse />
          </Title>
        </Anchor>

        <Box visibleFrom="md" component="span" style={{ lineHeight: 0 }}>
          <MotionFlame
            {...flameProps}
            animate={{ color: flickerKeyframes }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
          />
        </Box>
      </Flex>

      <Title ta="center" order={4} style={{ color: 'white' }}>
        The OFFICIAL cyber-home of the best fem&them rock band!
      </Title>
    </>
  );
}

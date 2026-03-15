'use client';

import { Anchor, Box, Flex, List, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import demoArt from '../../public/demo-art.jpg';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <Box className={styles.root} px={8} py={4}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'flex', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        gap={{ base: 2, md: 4 }}
      >
        <Image src={demoArt} alt="What A Shame (Demo) art" className={styles.art} />
        <Box px={4}>
          <Title order={4} ta="center">
            WELCOME TO OUR WEB PAGE!!!!!
          </Title>
          <Text>We are Choosing Clarity!!! Only one of us can play guitar.</Text>
          <Text fw={700}>UPDATES:</Text>
          <List icon="- ">
            <List.Item>
              <Text fw={700} span>
                03/??:
              </Text>{' '}
              Talk Talk (Demo) coming out
            </List.Item>
            <List.Item>
              <Text fw={700} span>
                01/26:
              </Text>{' '}
              <Anchor
                component={Link}
                c="purple"
                href="https://distrokid.com/hyperfollow/chasingclarity2/what-a-shame-demo"
              >
                What A Shame (Demo)
              </Anchor>{' '}
              released!!!
            </List.Item>
          </List>
        </Box>
      </Flex>
    </Box>
  );
}

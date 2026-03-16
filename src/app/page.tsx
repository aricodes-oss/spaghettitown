import ConstructionBanner from '@/components/ConstructionBanner';
import ViewCounter from '@/components/ViewCounter';
import { Anchor, Box, Flex, Group, List, ListItem, Text, Title } from '@mantine/core';
import { IconBolt, IconMusic } from '@tabler/icons-react';
import Image from 'next/image';

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

          <Text size="sm">We are Choosing Clarity!!! Only one of us can play guitar.</Text>

          <Text fw={700}>UPDATES:</Text>

          <List icon="- ">
            <ListItem>
              <Text fw={700} span>
                03/??:
              </Text>{' '}
              Talk Talk (Demo) probably coming out
            </ListItem>
            <ListItem>
              <Text fw={700} span>
                01/26:
              </Text>{' '}
              <Anchor
                c="violet"
                href="https://distrokid.com/hyperfollow/chasingclarity2/what-a-shame-demo"
                target="_blank"
              >
                What A Shame (Demo)
              </Anchor>{' '}
              released!!!
            </ListItem>
          </List>
        </Box>
      </Flex>

      <ConstructionBanner />

      <Group justify="space-between" align="center" gap={0}>
        <IconMusic size={48} color="blue" />
        <ViewCounter />
        <IconBolt size={48} color="yellow" />
      </Group>
    </Box>
  );
}

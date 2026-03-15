import Background from '@/components/Background';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import {
  ColorSchemeScript,
  Flex,
  MantineProvider,
  Stack,
  colorsTuple,
  createTheme,
} from '@mantine/core';
import type { Metadata } from 'next';
import { Gaegu } from 'next/font/google';
import Script from 'next/script';

import './globals.scss';

const gaegu = Gaegu({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const theme = createTheme({
  colors: {
    pink: colorsTuple('#FA6EA4'),
  },
  fontFamily: gaegu.style.fontFamily,
  fontFamilyMonospace: gaegu.style.fontFamily,
  headings: {
    fontFamily: gaegu.style.fontFamily,
  },
  scale: 2,
});

export const metadata: Metadata = {
  title: 'Choosing Clarity',
  description: 'Alternative rock from Portland, OR',
};

// Breakpoint at which we consider the layout to be on "desktop"
const desktop = 'md';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <Script
          defer
          data-domain="spaghettitown.xyz"
          src="https://plausible.aricodes.net/js/script.outbound-links.js"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={gaegu.className}>
        <MantineProvider theme={theme}>
          <Background />

          <Stack style={{ height: '100%' }} justify="flex-start" py={4} gap={0}>
            <Header />

            <Flex
              direction={{ base: 'column', [desktop]: 'row' }}
              justify={{ base: 'flex-start', [desktop]: 'space-between' }}
              align="stretch"
              style={{ flexGrow: 1 }}
              px={{ base: 4, [desktop]: 12 }}
              gap={0}
            >
              <Nav />
              <div>{children}</div>
            </Flex>
          </Stack>
        </MantineProvider>
      </body>
    </html>
  );
}

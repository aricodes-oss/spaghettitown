import Background from '@/components/Background';
import Header from '@/components/Header';
import { ColorSchemeScript, MantineProvider, colorsTuple, createTheme, rem } from '@mantine/core';
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
    sizes: {
      h1: { fontSize: rem(96) },
      h2: { fontSize: rem(72) },
      h3: { fontSize: rem(64) },
      h4: { fontSize: rem(48) },
      h5: { fontSize: rem(42) },
      h6: { fontSize: rem(32) },
    },
  },
});

export const metadata: Metadata = {
  title: 'Choosing Clarity',
  description: 'Alternative rock from Portland, OR',
};

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
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

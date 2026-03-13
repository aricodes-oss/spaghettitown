import Background from '@/components/Background';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';

import './globals.css';

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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <MantineProvider>
          <Background />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

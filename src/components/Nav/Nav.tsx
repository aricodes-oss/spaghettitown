'use client';

import { useMatches } from '@mantine/core';

import Desktop from './Desktop';
import Mobile from './Mobile';

const links = [
  { label: 'HOME', href: '/' },
  // { label: 'DA BAND', href: '/' },
  { label: 'GIGZ', href: '/shows' },
  { label: 'PIX', href: 'https://www.instagram.com/choosingclarityband_/' },
  { label: 'GUESTBOOK', href: '/guestbook' },
];

export interface NavProps {
  links: typeof links;
}

export function Nav() {
  const NavComponent = useMatches({ base: Mobile, md: Desktop });

  return <NavComponent links={links} />;
}

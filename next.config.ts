// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import path from 'node:path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  sassOptions: {
    implementation: 'sass-embedded',
    additionalData: `@use "${path.join(process.cwd(), '_mantine').replace(/\\/g, '/')}" as mantine;`,
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();

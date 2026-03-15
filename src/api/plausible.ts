import { getCloudflareContext } from '@opennextjs/cloudflare';

const site = 'spaghettitown.xyz';
const baseUrl = 'https://plausible.aricodes.net';

interface PlausibleResponse {
  results: {
    visitors: {
      value: number;
    };
  };
}

// Using fetch directly instead of the `plausible` npm package because it
// depends on undici, which is incompatible with the Cloudflare Workers runtime.
export async function getVisitors() {
  const key = process.env.PLAUSIBLE_API_KEY ?? (await getCloudflareContext()).env.PLAUSIBLE_API_KEY;
  const today = new Date().toISOString().split('T')[0];
  const params = new URLSearchParams({
    period: 'custom',
    metrics: 'visitors',
    date: `2005-01-01,${today}`,
    site_id: site,
  });
  const response = await fetch(`${baseUrl}/api/v1/stats/aggregate?${params}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  const {
    results: { visitors },
  } = (await response.json()) as PlausibleResponse;

  return visitors;
}

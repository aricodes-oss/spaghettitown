import { getCloudflareContext } from '@opennextjs/cloudflare';
import Plausible from 'plausible';

const site = 'spaghettitown.xyz';
const url = 'https://plausible.aricodes.net';

export async function GET() {
  const key =
    process.env.PLAUSIBLE_API_KEY ??
    (await getCloudflareContext()).env.PLAUSIBLE_API_KEY;
  const today = new Date().toISOString().split('T')[0];
  const plausible = new Plausible(key, site, url);
  const results = await plausible.getAggregate(
    // @ts-expect-error 'custom' is accepted by the API but not in the type definition
    'custom',
    'visitors',
    null,
    null,
    `2005-01-01,${today}`,
  );

  return Response.json(results);
}

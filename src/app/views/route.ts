import { getVisitors } from '@/api/plausible';

export async function GET() {
  return Response.json(await getVisitors());
}

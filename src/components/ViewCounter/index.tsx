import { getVisitors } from '@/api/plausible';

import { ViewCounter } from './ViewCounter';

export default async function ViewCounterServer() {
  const { value } = await getVisitors();
  return <ViewCounter visitors={value} />;
}

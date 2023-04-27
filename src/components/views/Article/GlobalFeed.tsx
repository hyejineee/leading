import { useFetchGlobalFeed } from '@contexts/FeedContext';
import { useEffect } from 'react';

export default function GlobalFeed() {
  const fetchArticels = useFetchGlobalFeed();

  useEffect(() => {
    fetchArticels();
  }, []);

  return <>글로벌 피드</>;
}

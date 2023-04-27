import { useFetchPersonalFeed } from '@contexts/FeedContext';
import { useEffect } from 'react';

export default function PersonalFeed() {
  const fetchArticels = useFetchPersonalFeed();

  useEffect(() => {
    fetchArticels();
  }, []);

  return <>개인 피드</>;
}

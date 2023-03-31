import GlobalFeed from 'src/components/views/Article/GlobalFeed';

import FetchGlobalFeedUseCase from 'src/useCases/FetchGlobalFeedUseCase';
import appContainer from '@common/di/container';
import APP_TYPES from '@common/di/types';
import { FeedProvider } from 'src/contexts/FeedContext';

export default function Home() {
  const fetchGlobalFeedUseCase = appContainer.get<FetchGlobalFeedUseCase>(
    APP_TYPES.USE_CASE_TYPES.FetchGlobalFeedUseCase,
  );

  return (
    <FeedProvider fetchGlobalFeedUseCase={fetchGlobalFeedUseCase}>
      <GlobalFeed />
    </FeedProvider>
  );
}

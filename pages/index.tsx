import GlobalFeed from 'src/components/views/Article/GlobalFeed';

import FetchGlobalFeedUseCase from 'src/useCases/FetchGlobalFeedUseCase';
import appContainer from '@common/di/container';
import APP_TYPES from '@common/di/types';
import { FeedProvider } from 'src/contexts/FeedContext';
import FetchPersonalFeedUseCase from '@useCases/FetchPersonalFeedUseCase';
import PersonalFeed from '@components/views/Article/PersonalFeed';

export default function Home() {
  const fetchGlobalFeedUseCase = appContainer.get<FetchGlobalFeedUseCase>(
    APP_TYPES.USE_CASE_TYPES.FetchGlobalFeedUseCase,
  );

  const fetchPersonalFeedUseCase = appContainer.get<FetchPersonalFeedUseCase>(
    APP_TYPES.USE_CASE_TYPES.FetchPersonalFeedUseCase,
  );

  return (
    <FeedProvider
      fetchGlobalFeedUseCase={fetchGlobalFeedUseCase}
      fetchPersonalFeedUseCase={fetchPersonalFeedUseCase}
    >
      <GlobalFeed />
      <PersonalFeed />
    </FeedProvider>
  );
}

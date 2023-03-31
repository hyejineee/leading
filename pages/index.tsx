import GlobalFeed from 'src/components/views/Article/GlobalFeed';
import { FeedProvider } from '@article/context/FeedContext';
import FetchGlobalFeedUseCase from '@article/usecases/FetchGlobalFeedUseCase';
import appContainer from '@common/di/container';
import APP_TYPES from '@common/di/types';

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

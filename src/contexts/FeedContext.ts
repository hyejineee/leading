import FetchGlobalFeedUseCase from 'src/useCases/FetchGlobalFeedUseCase';
import constate from 'constate';
import FetchPersonalFeedUseCase from '@useCases/FetchPersonalFeedUseCase';

type Props = {
  fetchGlobalFeedUseCase: FetchGlobalFeedUseCase;
  fetchPersonalFeedUseCase: FetchPersonalFeedUseCase;
};

const useFeedContext = ({
  fetchGlobalFeedUseCase,
  fetchPersonalFeedUseCase,
}: Props) => {
  const fetchGlobalFeed = async () => {
    const { articles, articlesCount } = await fetchGlobalFeedUseCase.execute();
  };

  const fetchPersonalFeed = async () => {
    const { articles, articlesCount } =
      await fetchPersonalFeedUseCase.execute();
  };

  return { fetchGlobalFeed };
};

export const [FeedProvider, useFetchGlobalFeed] = constate(
  useFeedContext,
  value => value.fetchGlobalFeed,
);

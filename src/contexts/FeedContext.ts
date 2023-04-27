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
    console.log('global', articles);
  };

  const fetchPersonalFeed = async () => {
    const { articles, articlesCount } =
      await fetchPersonalFeedUseCase.execute();
    console.log('personal', articles);
  };

  return { fetchGlobalFeed, fetchPersonalFeed };
};

export const [FeedProvider, useFetchGlobalFeed, useFetchPersonalFeed] =
  constate(
    useFeedContext,
    value => value.fetchGlobalFeed,
    value => value.fetchPersonalFeed,
  );

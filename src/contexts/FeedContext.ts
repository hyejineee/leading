import FetchGlobalFeedUseCase from 'src/useCases/FetchGlobalFeedUseCase';
import constate from 'constate';

type Props = {
  fetchGlobalFeedUseCase: FetchGlobalFeedUseCase;
};

const useFeedContext = ({ fetchGlobalFeedUseCase }: Props) => {
  const fetchGlobalFeed = async () => {
    const { articles, articlesCount } = await fetchGlobalFeedUseCase.execute();
  };

  return { fetchGlobalFeed };
};

export const [FeedProvider, useFetchGlobalFeed] = constate(
  useFeedContext,
  value => value.fetchGlobalFeed,
);

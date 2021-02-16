import { useQuery } from '@apollo/react-hooks';
import { GET_SINGLE_REPOSITORY } from '../graphql/quries';

const useReviewItems = (filter) => {
    // const filter = {
    //     ...dropDownFilter,
    //     searchKeyword: searchFilter,
    //     first: 2
    // };
    console.log("filter vale from useReviewitems:    ", filter);

    const queryResult = useQuery(GET_SINGLE_REPOSITORY, {
        variables: filter,
        fetchPolicy: 'cache-and-network',
    });

    // console.log("query result", queryResult);
    const { loading, data, fetchMore, ...result } = queryResult;

    const handleFetchMore = () => {
        const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }
        fetchMore({
            query: GET_SINGLE_REPOSITORY,
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...filter
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    reviews: {
                        ...fetchMoreResult.repository.reviews,
                        edges: [
                            ...previousResult.repository.reviews.edges,
                            ...fetchMoreResult.repository.reviews.edges
                        ]
                    }
                };
                return nextResult;
            }
        });
    };

    return { repository: data ? data.repository : undefined, loading, fetchMore: handleFetchMore, ...result };
};

export default useReviewItems;
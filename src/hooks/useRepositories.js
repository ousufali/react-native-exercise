import { useQuery } from '@apollo/react-hooks';
import GET_REPOSITORIES from '../graphql/quries';

const useRepositories = (dropDownFilter, searchFilter) => {
    const filter = {
        ...dropDownFilter,
        searchKeyword: searchFilter,
        first: 2
    };
    console.log("filter vale from useRepository:    ", filter);

    const queryResult = useQuery(GET_REPOSITORIES, {
        variables: filter,
        fetchPolicy: 'cache-and-network',
    });

    // console.log("query result", queryResult);
    const { loading, data, fetchMore, ...result } = queryResult;

    const handleFetchMore = () => {
        const canFetchMore = !loading && data && data.repositories.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }
        fetchMore({
            query: GET_REPOSITORIES,
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...filter
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    repositories: {
                        ...fetchMoreResult.repositories,
                        edges: [
                            ...previousResult.repositories.edges,
                            ...fetchMoreResult.repositories.edges
                        ]
                    }
                };
                return nextResult;
            }
        });
    };

    return { repositories: data ? data.repositories : undefined, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;
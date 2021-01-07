import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_REPOSITORIES from '../graphql/quries';

const useRepositories = () => {
    const [repositories, setRepositories] = useState();

    const queryResult = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

    // console.log("query result", queryResult);
    const { loading, refetch } = queryResult;

    useEffect(() => {
        if (!loading) {
            const repos = queryResult.data ? queryResult.data.repositories : [];
            setRepositories(repos);
            // console.log("data", queryResult.data);
        }


    }, [queryResult]);

    return { repositories, loading, refetch };
};

export default useRepositories;
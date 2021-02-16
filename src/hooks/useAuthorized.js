import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORIZED_USER_DATA } from '../graphql/quries';





const useAuthorized = () => {

    const queryResult = useQuery(GET_AUTHORIZED_USER_DATA, {
        fetchPolicy: 'cache-and-network'
    });

    if (queryResult.loading) {
        return false;
    }
    console.log("authQuery: ", queryResult);
    if (queryResult && queryResult.data.authorizedUser === null) {
        return false;
    }
    return true;

};



export default useAuthorized;

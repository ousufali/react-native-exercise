import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useHistory } from 'react-router-native';

const useSignIn = () => {
    const history = useHistory();
    const Apollo_client = useApolloClient();
    const [mutate, result] = useMutation(SIGN_IN);
    const authStorage = useContext(AuthStorageContext);
    // console.log("mutate", mutate, "\nresult:", result);


    const signIn = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { credentials: { username, password } }
        });
        // console.log("data", data);
        // console.log("token", data.authorize.accessToken);
        if (data) {
            await authStorage.setAccessToken(data.authorize.accessToken);
            Apollo_client.resetStore();
            history.push("/");
            return data;
        }
    };


    return [signIn, result];
};





export default useSignIn;
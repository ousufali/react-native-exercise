import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from '../graphql/mutations';
import useSignIn from './useSignIn';

const useSignUp = () => {
    const [signUpMutate, signUpMutateResult] = useMutation(SIGN_UP);
    // console.log("mutate", mutate, "\nresult:", result);
    const [signIn] = useSignIn();




    const signUp = async ({ username, password }) => {

        const { data } = await signUpMutate({
            variables: { user: { username, password } }
        });
        // console.log("data", data);
        // console.log("token", data.authorize.accessToken);
        if (!data.loading) {
            console.log("sigining In.")
            await signIn({ username, password });
        }
        return { ...data.createUser }
    };


    return [signUp, signUpMutateResult];
};


export default useSignUp;
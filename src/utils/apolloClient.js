import ApolloClient from 'apollo-boost';
import Constants from "expo-constants";




const createApolloClient = (authStorage) => {
    // console.log("Constant.manifest: ", Constants.manifest);


    return new ApolloClient({
        request: async (operation) => {
            try {
                const accessToken = await authStorage.getAccessToken();
                operation.setContext({
                    headers: {
                        authorization: accessToken ? `Bearer ${accessToken}` : '',
                    },
                });

            } catch (e) {
                console.log("error:", e);
            }

        }
        ,
        uri: Constants.manifest.extra.APOLLO_URI,
    });
};

export default createApolloClient;
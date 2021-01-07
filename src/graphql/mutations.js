
import { gql } from 'apollo-boost';



export const SIGN_IN = gql`
mutation  LOGIN($credentials: AuthorizeInput!) {
    authorize(credentials : $credentials){
        accessToken
    }
}
`;

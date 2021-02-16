
import { gql } from 'apollo-boost';


export const SIGN_UP = gql`
mutation SIGNUP($user : CreateUserInput){
  createUser(user: $user){
    id
    username
    createdAt
  }
}

`;

export const SIGN_IN = gql`
mutation  LOGIN($credentials: AuthorizeInput!) {
    authorize(credentials : $credentials){
        accessToken
    }
}
`;

export const CREATE_REVIEW = gql`
mutation createReview(
  $repo_name: String!
  $owner_name: String!
  $rating: Int!
  $text: String
) {
  createReview(
    review: {
      repositoryName: $repo_name
      ownerName: $owner_name
      rating: $rating
      text: $text
    }
  ) {
    repositoryId
  }
}
`;
import { gql } from 'apollo-boost';


export const GET_AUTHORIZED_USER_DATA = gql`
  query getAuthorizedUser {
    authorizedUser {
      id
      username
    }
  }
`;



const GET_REPOSITORIES = gql`
query {
  repositories{
    edges{
      node{
        fullName
        forksCount
        ownerAvatarUrl
        description
        language
        reviewCount
        stargazersCount
        ratingAverage
      }
    }
  }
}
`;



export default GET_REPOSITORIES;



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
query GET_REPOSITORIES($orderBy : AllRepositoriesOrderBy $orderDirection :OrderDirection $searchKeyword : String $first : Int $after :String){
  repositories(orderBy:$orderBy orderDirection:$orderDirection searchKeyword:$searchKeyword first : $first after : $after){
    edges{
      node{
        id
        fullName
        forksCount
        ownerAvatarUrl
        description
        language
        reviewCount
        stargazersCount
        ratingAverage
        url
      }
      cursor
    }
    pageInfo{
      endCursor
      startCursor
      totalCount
      hasNextPage
    }
  }
}
`;

export const GET_SINGLE_REPOSITORY = gql`

query GET_SINGLE_REPOSITORY($REPO_ID: ID! $first:Int $after: String){
  repository(id:$REPO_ID) {
    id
    fullName
    forksCount
    ownerAvatarUrl
    description
    language
    reviewCount
    stargazersCount
    ratingAverage
    url
    reviews(first: $first after:$after){
      edges {
        node {
          id
          text
          rating
          createdAt
          repositoryId
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo{
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
}
`;


export default GET_REPOSITORIES;



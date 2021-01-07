import { gql } from "apollo-boost";



const REPOSITORY_DETAILS = gql`
fragment REPOSITORY_DETAILS on  node {
    fullName,
    forksCount,
    ownerAvatarUrl,
    description,
    language,
    reviewCount,
    stargazersCount,
    ratingAverage
}
`;

export default { REPOSITORY_DETAILS };
import gql from "graphql-tag";

export const FIND_MANY_POST = gql`
    query {
        findManyPost {
            id
            text
            title
        }
    }
`;
export const USER = gql`
    query {
        user {
            id
            login
            name
        }
    }
`;

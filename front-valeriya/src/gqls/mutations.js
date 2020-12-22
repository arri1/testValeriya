import gql from "graphql-tag";

export const REGISTER_USER = gql`
    mutation($data: RegistrationUserInput!) {
        registerUser(data: $data) {
            token
            user {
                id
                name
                login
            }
        }
    }
`;

export const AUTH_USER = gql`
    mutation($data: AuthUserInput!) {
        authUser(data: $data) {
            token
            user {
                id
                login
                name
            }
        }
    }
`;

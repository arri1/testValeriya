import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { HttpLink } from "apollo-link-http";

const host = "https://nefu-server.herokuapp.com";

const authLink = setContext(async (_, { headers }) => {
    const token = await localStorage.getItem("token");
    return {
        headers: {
            ...headers,
            authorization: token ? token : "",
        },
    };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message }) => {
            console.error(message);
        });
    if (networkError) console.error(`network error ${networkError}`);
});

const link = new HttpLink({ uri: host });

const mergedlink = ApolloLink.from([authLink, errorLink, link]);

const client = new ApolloClient({
    link: mergedlink,
    cache: new InMemoryCache(),
});

export default client;

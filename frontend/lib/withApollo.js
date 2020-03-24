// This is the HOC (higher order component) used to wrap pages that need Apollo Client
// See https://www.npmjs.com/package/next-with-apollo for how to SSR only when wrapping a page

import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri:
        process.env.NODE_ENV === "development" ? "http://localhost:4000" : "http://localhost:4000",
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);

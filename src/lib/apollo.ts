import { HttpLink } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import { auth } from "./firebase";
import { InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: import.meta.env.PUBLIC_GRAPHQL_URI
})

const authLink = new SetContextLink(async ctx => {
  const token = await auth.currentUser?.getIdToken()

  return {
    ...ctx,
    headers: {
      ...ctx.headers,
      ...(token && {
        Authorization: `Bearer ${token}`
      })
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
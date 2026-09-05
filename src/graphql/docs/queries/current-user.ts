import { graphql } from "@/graphql/gql";

export const CURRENT_USER = graphql(`
  query CurrentUser {
    currentUser {
      id
    }
  }
`)
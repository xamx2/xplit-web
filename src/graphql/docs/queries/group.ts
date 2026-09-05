import { graphql } from "@/graphql/gql";

export const GROUP = graphql(`
  query Group($id: ID!) {
    currentUser {
      id
      group(id: $id) {
        ...CoreGroupFields
      }
    }
  }
`)
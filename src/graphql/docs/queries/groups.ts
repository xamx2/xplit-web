import { graphql } from "@/graphql/gql";

export const GROUPS = graphql(`
  query Groups {
    currentUser {
      id
      groups {
        ...CoreGroupFields
      }
    }
  }
`)
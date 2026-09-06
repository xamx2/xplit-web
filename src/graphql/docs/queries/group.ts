import { graphql } from "@/graphql/gql";

export const GROUP = graphql(`
  query Group($groupId: ID!) {
    currentUser {
      id
      group(id: $groupId) {
        ...CoreGroupFields
      }
    }
  }
`)
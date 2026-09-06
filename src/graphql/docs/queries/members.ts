import { graphql } from "@/graphql/gql";

export const MEMBERS = graphql(`
  query Members($groupId: ID!) {
    currentUser {
      group(id: $groupId) {
        id
        members {
          ...CoreMemberFields
        }
      }
    }
  }
`)
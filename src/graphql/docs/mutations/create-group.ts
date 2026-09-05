import { graphql } from "@/graphql/gql";

export const CREATE_GROUP = graphql(`
  mutation CreateGroup($input: GroupInput!) {
    createGroup(input: $input) {
      ...CoreGroupFields
    }
  }
`)
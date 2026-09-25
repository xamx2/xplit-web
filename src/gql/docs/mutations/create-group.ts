import { graphql } from "../../graphql";

export const CREATE_GROUP = graphql(`
  mutation CreateGroup($input: GroupInput!) {
    createGroup(input: $input) {
      ...CoreGroupFields
    }
  }
`)
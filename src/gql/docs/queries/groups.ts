import { graphql } from "../../graphql";

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
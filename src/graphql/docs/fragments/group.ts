import { graphql } from "@/graphql/gql";

export const CORE_GROUP_FIELDS = graphql(`
  fragment CoreGroupFields on Group {
    id
    name
  }
`)
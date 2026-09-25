import { graphql } from "../../graphql";

export const CORE_GROUP_FIELDS = graphql(`
  fragment CoreGroupFields on Group {
    id
    name
  }
`)
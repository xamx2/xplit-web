import { graphql } from "@/graphql/gql";

export const CORE_MEMBER_FIELDS = graphql(`
  fragment CoreMemberFields on GroupMember {
    id
    name
  }
`)
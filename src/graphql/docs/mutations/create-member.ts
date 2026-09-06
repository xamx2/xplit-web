import { graphql } from "@/graphql/gql";

export const CREATE_MEMBER = graphql(`
  mutation CreateGroupMember($groupId: ID!, $input: GroupMemberInput!) {
    createGroupMember(groupId: $groupId, input: $input) {
      ...CoreMemberFields
    }
  }
`)
import { graphql } from "@/graphql/gql";

export const TRANSACTIONS = graphql(`
  query Transactions($groupId: ID!) {
    currentUser {
      group(id: $groupId) {
        id
        transactions {
          ...CoreTransactionFields
        }
      }
    }
  }
`)
import { graphql } from "../../graphql";

export const GROUP_TRANSACTIONS = graphql(`
  query GroupTransactions($groupId: ID!) {
    currentUser {
      id
      group(id: $groupId) {
        id
        transactions {
          ...CoreTransactionFields
        }
      }
    }
  }
`)
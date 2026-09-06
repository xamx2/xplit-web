import { graphql } from "@/graphql/gql";

export const CREATE_TRANSACTION = graphql(`
  mutation CreateTransaction($groupId: ID!, $input: TransactionInput!) {
    createTransaction(groupId: $groupId, input: $input) {
      ...CoreTransactionFields
    }
  }
`)
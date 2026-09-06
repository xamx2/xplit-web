import { graphql } from "@/graphql/gql";

export const CORE_TRANSACTION_FIELDS = graphql(`
  fragment CoreTransactionFields on Transaction {
    id
    amount
    description
  }
`)
import { graphql } from "../../graphql";

export const CORE_TRANSACTION_FIELDS = graphql(`
  fragment CoreTransactionFields on Transaction {
    id
    amount
    description
    createdAt
    member {
      name
    }
  }
`)
import { graphql } from "../../graphql";

export const TRANSACTIONS = graphql(`
  query Transactions {
    currentUser {
      id
      transactions {
        ...CoreTransactionFields
      }
    }
  }
`)
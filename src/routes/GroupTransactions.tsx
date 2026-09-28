import { useSuspenseQuery } from "@apollo/client/react"
import { GROUP_TRANSACTIONS } from "../gql/docs/queries/group-transactions"
import { useParams, useRouter } from "@dundunlabs/router"
import TransactionList from "./components/TransactionList"

export default function GroupTransactions() {
  const router = useRouter()
  const { groupId } = useParams()
  const { data: { currentUser: { group: { transactions } } } } = useSuspenseQuery(GROUP_TRANSACTIONS, { variables: { groupId } })

  return (
    <div>
      <h2>
        Transactions
        <button
          style={{ float: 'right' }}
          onClick={() => router.push('transactions/new')}
        >
          Add transaction
        </button>
      </h2>
      <TransactionList transactions={transactions} />
    </div>
  )
}
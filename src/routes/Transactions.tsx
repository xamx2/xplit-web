import { CORE_TRANSACTION_FIELDS } from "@/graphql/docs/fragments/transaction"
import { TRANSACTIONS } from "@/graphql/docs/queries/transactions"
import { unmaskFragment } from "@/graphql/gql"
import { useSuspenseQuery } from "@apollo/client/react"
import { Link, useParams } from "react-router"

export function Component() {
  const { groupId } = useParams()
  const { data } = useSuspenseQuery(TRANSACTIONS, {
    variables: { groupId: groupId! },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div>
      <h2>Transactions</h2>
      <ul className="list-disc">
        {data.currentUser.group.transactions.map(t => {
          const { id, description, amount } = unmaskFragment(CORE_TRANSACTION_FIELDS, t)

          return (
            <li key={id}>
              {amount} - {description}
            </li>
          )
        })}
        <li><Link to='new'>Add transaction</Link></li>
      </ul>
    </div>
  )
}
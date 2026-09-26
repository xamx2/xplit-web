import { CORE_TRANSACTION_FIELDS } from "../../gql/docs/fragments/transaction"
import { unmaskFragment, type FragmentType } from "../../gql/graphql"
import { Fragment } from "react"

interface TransactionListProps {
  transactions: FragmentType<typeof CORE_TRANSACTION_FIELDS>[]
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <dl>
      {transactions.map((transaction, idx, arr) => {
        const { id, amount, description, createdAt, member } = unmaskFragment(CORE_TRANSACTION_FIELDS, transaction)
        const currDate = new Date(createdAt)
        const prevTransaction = arr[idx - 1]
        const prevDate = prevTransaction
          ? new Date(unmaskFragment(CORE_TRANSACTION_FIELDS, prevTransaction).createdAt)
          : undefined
        const date = currDate.toLocaleDateString() !== prevDate?.toLocaleDateString()
          ? currDate
          : null

        return (
          <Fragment key={id}>
            {date && <dt>{date.toDateString()}</dt>}
            <dd style={{ margin: '0.5rem 1rem' }}>
              <small>{member.name} paid at {currDate.toLocaleTimeString()}</small><br />
              {amount.toLocaleString(undefined, { style: 'currency', currency: 'VND' })}
              {description && ` - ${description}`}
            </dd>
          </Fragment>
        )
      })}
    </dl>
  )
}
import Section from "@/components/Section"
import { CORE_TRANSACTION_FIELDS } from "@/graphql/docs/fragments/transaction"
import { TRANSACTIONS } from "@/graphql/docs/queries/transactions"
import { unmaskFragment } from "@/graphql/gql"
import { useSuspenseQuery } from "@apollo/client/react"
import { PlusIcon } from "@heroicons/react/24/outline"
import { Link, useParams } from "react-router"

export function Component() {
  const { groupId } = useParams()
  const { data } = useSuspenseQuery(TRANSACTIONS, {
    variables: { groupId: groupId! },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <Section
      title="Transactions"
      actions={
        <Link to='new' className="inline-flex items-center gap-1 text-gray-600">
          <PlusIcon className="size-5" />
          Create
        </Link>
      }
    >
      <ul className="list-disc">
        {data.currentUser.group.transactions.map(t => {
          const { id, description, amount } = unmaskFragment(CORE_TRANSACTION_FIELDS, t)

          return (
            <li key={id}>
              {amount} - {description}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
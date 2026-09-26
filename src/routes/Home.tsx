import { Link, useRouter } from "@dundunlabs/router";
import { useUser } from "../contexts/UserContext";
import { useSuspenseQuery } from "@apollo/client/react";
import { TRANSACTIONS } from "../gql/docs/queries/transactions";
import TransactionList from "./components/TransactionList";
import { GROUPS } from "../gql/docs/queries/groups";
import { unmaskFragment } from "../gql/graphql";
import { CORE_GROUP_FIELDS } from "../gql/docs/fragments/group";

export default function Home() {
  const user = useUser()
  if (!user) throw 401

  const router = useRouter()
  const { data } = useSuspenseQuery(GROUPS)

  return (
    <>
      <header>
        <h1>
          Hi{' '}
          <Link to='/profile'>
            {user.displayName}
          </Link>
          {' '}👋
        </h1>
      </header>
      <main>
        <div>
          <p>Lets split the bill with your groups</p>
          <ul>
            {data.currentUser.groups.map(group => {
              const { id, name } = unmaskFragment(CORE_GROUP_FIELDS, group)

              return (
                <li key={id}>
                  <Link to={`/groups/${id}`}>
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
          <p>
            <Link to='/groups/new'>
              Create new group
            </Link>
          </p>
        </div>
        {data.currentUser.groups.length > 0 && (
          <>
            <hr />
            <div>
              <h2>
                Transactions
                <button
                  style={{ float: 'right' }}
                  onClick={() => router.push('/transactions/new')}
                >
                  Add transaction
                </button>
              </h2>
              <Transactions />
            </div>
          </>
        )}
      </main >
    </>
  )
}

function Transactions() {
  const { data } = useSuspenseQuery(TRANSACTIONS)
  return <TransactionList transactions={data.currentUser.transactions} />
}
import Page from "@/components/Page"
import { useUser } from "@/contexts/UserContext"
import { CORE_GROUP_FIELDS } from "@/graphql/docs/fragments/group"
import { GROUPS } from "@/graphql/docs/queries/groups"
import { unmaskFragment } from "@/graphql/gql"
import auth from "@/lib/firebase/auth"
import { useSuspenseQuery } from "@apollo/client/react"
import { signOut } from "firebase/auth"
import { Link, useNavigate } from "react-router"

export function Component() {
  const { data } = useSuspenseQuery(GROUPS, { fetchPolicy: 'cache-and-network' })
  const navigate = useNavigate()
  const user = useUser()

  return (
    <Page
      title={`Hi ${user?.displayName || 'there'}`}
      description='Lets "xplit" your expenses with others'
      actions={[
        {
          path: '/groups/new',
          name: 'New group'
        }
      ]}
    >
      <div>
        <ul className="list-disc">
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
      </div>

      <button onClick={() => signOut(auth).then(() => navigate('/'))}>Logout</button>
    </Page>
  )
}
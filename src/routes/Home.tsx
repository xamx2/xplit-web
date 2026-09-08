import Page from "@/components/Page"
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

  return (
    <Page
      title="Xplit"
      description="Group expenses sharing"
    >
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
        <li>
          <Link to="/groups/new">
            New group
          </Link>
        </li>
      </ul>

      <button onClick={() => signOut(auth).then(() => navigate('/'))}>Logout</button>
    </Page>
  )
}
import { useSuspenseQuery } from "@apollo/client/react"
import { GROUPS } from "../../gql/docs/queries/groups"
import { Link } from "@dundunlabs/router"
import { unmaskFragment } from "../../gql/graphql"
import { CORE_GROUP_FIELDS } from "../../gql/docs/fragments/group"

export default function Groups() {
  const { data } = useSuspenseQuery(GROUPS)

  return (
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
  )
}
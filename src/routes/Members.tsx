import { CORE_MEMBER_FIELDS } from "@/graphql/docs/fragments/member"
import { MEMBERS } from "@/graphql/docs/queries/members"
import { unmaskFragment } from "@/graphql/gql"
import { useSuspenseQuery } from "@apollo/client/react"
import { Link, useParams } from "react-router"

export function Component() {
  const { groupId } = useParams()
  const { data } = useSuspenseQuery(MEMBERS, {
    variables: { groupId: groupId! },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div>
      <h2>Members</h2>
      <ul className="list-disc">
        {data.currentUser.group.members.map(m => {
          const { id, name } = unmaskFragment(CORE_MEMBER_FIELDS, m)

          return (
            <li key={id}>
              {name}
            </li>
          )
        })}
        <li>
          <Link to='new'>Add member</Link>
        </li>
      </ul>
    </div>
  )
}
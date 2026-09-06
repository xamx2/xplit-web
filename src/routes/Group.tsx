import { CORE_GROUP_FIELDS } from "@/graphql/docs/fragments/group"
import { GROUP } from "@/graphql/docs/queries/group"
import { unmaskFragment } from "@/graphql/gql"
import { useSuspenseQuery } from "@apollo/client/react"
import { Link, Outlet, useParams } from "react-router"

export function Component() {
  const { groupId } = useParams()
  if (!groupId) throw 'groupId not found'

  const { data } = useSuspenseQuery(GROUP, { variables: { groupId } })
  const { name } = unmaskFragment(CORE_GROUP_FIELDS, data.currentUser.group)

  return (
    <div className="container px-6">
      <h1>{name}</h1>
      <ul className="list-disc">
        <li><Link to='transactions'>Transactions</Link></li>
        <li><Link to='members'>Members</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}
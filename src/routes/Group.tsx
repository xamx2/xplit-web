import { CORE_GROUP_FIELDS } from "@/graphql/docs/fragments/group"
import { GROUP } from "@/graphql/docs/queries/group"
import { unmaskFragment } from "@/graphql/gql"
import { useSuspenseQuery } from "@apollo/client/react"
import { useParams } from "react-router"

export function Component() {
  const { groupId: id } = useParams()
  if (!id) throw 'groupId not found'

  const { data } = useSuspenseQuery(GROUP, { variables: { id } })
  const { name } = unmaskFragment(CORE_GROUP_FIELDS, data.currentUser.group)

  return <h1>{name}</h1>
}
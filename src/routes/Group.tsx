import Page from "@/components/Page"
import { CORE_GROUP_FIELDS } from "@/graphql/docs/fragments/group"
import { GROUP } from "@/graphql/docs/queries/group"
import { unmaskFragment } from "@/graphql/gql"
import { useSuspenseQuery } from "@apollo/client/react"
import { Outlet, useParams } from "react-router"

export function Component() {
  const { groupId } = useParams()
  if (!groupId) throw 'groupId not found'

  const { data } = useSuspenseQuery(GROUP, { variables: { groupId } })
  const { name } = unmaskFragment(CORE_GROUP_FIELDS, data.currentUser.group)

  return (
    <Page
      title={name}
      actions={[
        { path: 'transactions', name: 'Transactions' },
        { path: 'members', name: 'Members' },
      ]}>
      <Outlet />
    </Page>
  )
}
import { useSuspenseQuery } from "@apollo/client/react";
import Page from "../components/Page";
import { GROUP } from "../gql/docs/queries/group";
import { Link, Outlet, useParams } from "@dundunlabs/router";
import { unmaskFragment } from "../gql/graphql";
import { CORE_GROUP_FIELDS } from "../gql/docs/fragments/group";

export default function Group() {
  const { groupId } = useParams()

  const { data: { currentUser: { group } } } = useSuspenseQuery(GROUP, { variables: { groupId } })
  const { name } = unmaskFragment(CORE_GROUP_FIELDS, group)

  return (
    <Page
      divide
      title={name}
      actions={
        <ul>
          <li>
            <Link to={`${groupId}/transactions`}>
              Transactions
            </Link>
          </li>
        </ul>
      }
    >
      <Outlet />
    </Page>
  )
}
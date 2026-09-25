import { useMutation } from "@apollo/client/react";
import Page from "../components/Page";
import GroupForm from "./components/GroupForm";
import { CREATE_GROUP } from "../gql/docs/mutations/create-group";
import { useRouter } from "@dundunlabs/router";
import { unmaskFragment } from "../gql/graphql";
import { CORE_GROUP_FIELDS } from "../gql/docs/fragments/group";

export default function NewGroup() {
  const router = useRouter()
  const [createGroup, { loading }] = useMutation(CREATE_GROUP, {
    onCompleted(data) {
      const { id } = unmaskFragment(CORE_GROUP_FIELDS, data.createGroup)
      router.push(`/groups/${id}`)
    }
  })

  return (
    <Page title="New group">
      <GroupForm
        onSubmit={input => createGroup({ variables: { input } })}
        actions={<button type='submit' disabled={loading}>Create</button>}
      />
    </Page>
  )
}
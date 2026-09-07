import Input from "@/components/Input"
import Page from "@/components/Page"
import { CORE_GROUP_FIELDS } from "@/graphql/docs/fragments/group"
import { CREATE_GROUP } from "@/graphql/docs/mutations/create-group"
import { unmaskFragment } from "@/graphql/gql"
import { useMutation } from "@apollo/client/react"
import { useNavigate } from "react-router"

export function Component() {
  const navigate = useNavigate()
  const [createGroup, { loading }] = useMutation(CREATE_GROUP, {
    onCompleted(data) {
      const { id } = unmaskFragment(CORE_GROUP_FIELDS, data.createGroup)
      navigate(`/groups/${id}`)
    }
  })

  return (
    <Page title="New group">
      <form
        onSubmit={e => {
          e.preventDefault()
          const data = new FormData(e.currentTarget)
          createGroup({ variables: { input: { name: data.get('name')?.toString() } } })
        }}
      >
        <Input label='Name' name='name' required />
        <button disabled={loading} type='submit'>Create</button>
      </form>
    </Page>
  )
}
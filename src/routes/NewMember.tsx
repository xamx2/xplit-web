import Button from "@/components/Button"
import Form from "@/components/Form"
import Input from "@/components/Input"
import Page from "@/components/Page"
import { CREATE_MEMBER } from "@/graphql/docs/mutations/create-member"
import { useMutation } from "@apollo/client/react"
import { useNavigate, useParams } from "react-router"

export function Component() {
  const navigate = useNavigate()
  const { groupId } = useParams()
  if (!groupId) throw 'groupId not found'

  const [createMember, { loading }] = useMutation(CREATE_MEMBER, {
    variables: { groupId },
    onCompleted() {
      navigate(-1)
    }
  })

  return (
    <Page title="New member" backable>
      <Form
        onSubmit={e => {
          const data = new FormData(e.currentTarget)
          createMember({
            variables: {
              input: { name: data.get('name')?.toString() }
            }
          })
        }}
      >
        <Input label='Name' name='name' required />
        <div>
          <Button
            type='submit'
            variant="solid"
            disabled={loading}
          >
            Create
          </Button>
        </div>
      </Form>
    </Page>
  )
}
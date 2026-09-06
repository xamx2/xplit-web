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
    <form
      onSubmit={e => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        createMember({
          variables: {
            input: { name: data.get('name')?.toString() }
          }
        })
      }}
    >
      <input name='name' required />
      <button disabled={loading} type='submit'>Create</button>
    </form>
  )
}
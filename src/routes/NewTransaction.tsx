import { useNavigate, useParams } from "react-router"
import TransactionForm, { TRANSACTION_FORM_ID } from "./components/TransactionForm"
import { useMutation } from "@apollo/client/react"
import { CREATE_TRANSACTION } from "@/graphql/docs/mutations/create-transaction"
import Page from "@/components/Page"

export function Component() {
  const { groupId } = useParams()
  if (!groupId) throw 'groupId not found'

  const navigate = useNavigate()
  const [createTransaction, { loading }] = useMutation(CREATE_TRANSACTION, {
    variables: { groupId },
    onCompleted() {
      navigate(-1)
    }
  })

  return (
    <Page title="Add transaction">
      <div>
        <TransactionForm groupId={groupId} onSubmit={input => createTransaction({ variables: { input } })} />
        <button type='submit' form={TRANSACTION_FORM_ID} disabled={loading}>
          Create
        </button>
      </div>
    </Page>
  )
}
import { useNavigate, useParams } from "react-router"
import TransactionForm, { TRANSACTION_FORM_ID } from "./components/TransactionForm"
import { useMutation } from "@apollo/client/react"
import { CREATE_TRANSACTION } from "@/graphql/docs/mutations/create-transaction"
import Page from "@/components/Page"
import Button from "@/components/Button"

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
    <Page title="Add transaction" backable>
      <div>
        <TransactionForm
          groupId={groupId}
          onSubmit={input => createTransaction({ variables: { input } })}
          actions={
            <Button
              type='submit'
              variant="solid"
              disabled={loading}
            >
              Create
            </Button>
          }
        />
      </div>
    </Page>
  )
}
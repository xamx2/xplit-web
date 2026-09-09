import Form from "@/components/Form"
import Input from "@/components/Input"
import Select from "@/components/Select"
import { CORE_MEMBER_FIELDS } from "@/graphql/docs/fragments/member"
import { MEMBERS } from "@/graphql/docs/queries/members"
import { unmaskFragment } from "@/graphql/gql"
import type { TransactionInput } from "@/graphql/gql/graphql"
import { useSuspenseQuery } from "@apollo/client/react"
import { useMemo, useState } from "react"

export const TRANSACTION_FORM_ID = 'transaction-form'

export default function TransactionForm({
  groupId,
  onSubmit,
  actions
}: {
  groupId: Id,
  onSubmit(input: TransactionInput): void
  actions: React.ReactNode
}) {
  const { data: { currentUser: { group: { members } } } } = useSuspenseQuery(MEMBERS, {
    variables: { groupId }
  })

  const [amount, setAmount] = useState('')
  const [splits, setSplits] = useState(() => members.reduce<Record<string, string | undefined>>((s, m) => {
    s[unmaskFragment(CORE_MEMBER_FIELDS, m).id] = undefined
    return s
  }, {}))

  const defaultSplitAmount = useMemo(() => {
    let count = 0, left = +amount
    for (const [, v] of Object.entries(splits)) {
      if (v === undefined) count++
      else left -= +v
    }
    return left / count
  }, [amount, splits])

  return (
    <Form
      id={TRANSACTION_FORM_ID}
      onSubmit={e => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        onSubmit({
          memberId: +data.get('memberId')!,
          amount: +amount,
          description: data.get('description')?.toString(),
          splits: Object.entries(splits).map(([k, v]) => ({
            memberId: +k,
            amount: v === undefined ? defaultSplitAmount : +v
          }))
        })
      }}
    >
      <Select name='memberId' label="From">
        {members.map(m => {
          const { id, name } = unmaskFragment(CORE_MEMBER_FIELDS, m)
          return <option key={id} value={id}>{name}</option>
        })}
      </Select>

      <Input
        required
        type='number'
        name='amount'
        label='Amount'
        value={amount || ''}
        onChange={e => setAmount(e.currentTarget.value)}
      />

      <Input name='description' label="Description" />

      <fieldset>
        <legend className="text-gray-700">For</legend>
        <div className="mt-2 grid gap-2">
          {members.map(m => {
            const { id, name } = unmaskFragment(CORE_MEMBER_FIELDS, m)
            const checked = id in splits

            return (
              <div key={id} className="flex justify-between">
                <label className="inline-flex items-center">
                  <input
                    type='checkbox'
                    checked={checked}
                    className="form-checkbox"
                    onChange={() => {
                      const newSplits = { ...splits }
                      if (checked) delete newSplits[id]
                      else newSplits[id] = undefined
                      setSplits(newSplits)
                    }}
                  />
                  <span className="ml-2">
                    {name}
                  </span>
                </label>
                <input
                  type='number'
                  disabled={!checked}
                  value={checked ? splits[id] ?? defaultSplitAmount : 0}
                  onChange={e => setSplits({ ...splits, [id]: e.currentTarget.value })}
                />
              </div>
            )
          })}
        </div>
      </fieldset>
      {actions}
    </Form>
  )
}
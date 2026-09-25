import type { GroupInput } from "../../gql/graphql/graphql"

interface GroupFormProps {
  actions: React.ReactNode
  onSubmit(input: GroupInput): void
}

export default function GroupForm({ actions, onSubmit }: GroupFormProps) {
  return (
    <form
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        onSubmit({
          name: data.get('name')?.toString()
        })
      }}
    >
      <p>
        <label>
          Name
          <br />
          <input
            required
            autoFocus
            name='name'
          />
        </label>
      </p>
      {actions}
    </form>
  )
}
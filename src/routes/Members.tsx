import Section from "@/components/Section"
import { CORE_MEMBER_FIELDS } from "@/graphql/docs/fragments/member"
import { MEMBERS } from "@/graphql/docs/queries/members"
import { unmaskFragment } from "@/graphql/gql"
import { useSuspenseQuery } from "@apollo/client/react"
import { PlusIcon } from "@heroicons/react/24/outline"
import { Link, useParams } from "react-router"

export function Component() {
  const { groupId } = useParams()
  const { data } = useSuspenseQuery(MEMBERS, {
    variables: { groupId: groupId! },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <Section
      title="Members"
      actions={
        <Link to='new' className="inline-flex items-center gap-1 text-gray-600">
          <PlusIcon className="size-5" />
          Create
        </Link>
      }
    >
      <ul className="list-disc">
        {data.currentUser.group.members.map(m => {
          const { id, name } = unmaskFragment(CORE_MEMBER_FIELDS, m)

          return (
            <li key={id}>
              {name}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
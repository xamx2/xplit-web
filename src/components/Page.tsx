import { Children } from "react"
import { Link } from "react-router"

interface PageAction {
  path: string
  name: string
}

interface PageProps {
  title: string
  description?: string
  actions?: PageAction[]
}

export default function Page({ title, description, actions = [], children }: React.PropsWithChildren<PageProps>) {
  return (
    <div className="max-w-xl mx-auto py-12 px-6 divide-y text-gray-900">
      <div className="py-8">
        <h1 className="text-4xl font-bold">{title}</h1>
        {description && <p className="mt-2 text-lg text-gray-600">{description}</p>}
        {actions.length > 0 && (
          <div className="mt-4 flex space-x-4">
            {actions.map(({ path, name }) => (
              <Link key={path} to={path} className="text-lg underline">{name}</Link>
            ))}
          </div>
        )}
      </div>
      {Children.map(children, child => (
        <div className="py-12">
          {child}
        </div>
      ))}
    </div>
  )
}
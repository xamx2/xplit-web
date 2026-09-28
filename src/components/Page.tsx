import { Link } from "@dundunlabs/router"

type PageProps = React.PropsWithChildren<{
  title: string
  actions?: React.ReactNode
  divide?: boolean
}>

export default function Page({ title, actions, divide, children }: PageProps) {
  return (
    <>
      <header>
        <Link to={-1}>Back</Link>
        <h1>{title}</h1>
        {actions}
      </header>
      {divide && <hr />}
      <main>
        {children}
      </main>
    </>
  )
}
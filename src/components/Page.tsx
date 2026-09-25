import { Link } from "@dundunlabs/router"

type PageProps = React.PropsWithChildren<{
  title: string
}>

export default function Page({ title, children }: PageProps) {
  return (
    <>
      <header>
        <Link to={-1}>Back</Link>
        <h1>{title}</h1>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}
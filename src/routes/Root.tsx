import { Link, Redirect } from "@dundunlabs/router"
import { useUser } from "../contexts/UserContext"

export default function Root() {
  const user = useUser()

  if (user) return <Redirect to='home' />

  return (
    <main>
      <h1>Xplit</h1>
      <p>Group expenses sharing app</p>
      <Link to='login'>Get started</Link>
    </main>
  )
}

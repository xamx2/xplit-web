import { useUser } from "@/contexts/UserContext"
import { Link } from "react-router"

export function Component() {
  const user = useUser()

  if (!user) return <Link to='/login'>Login</Link>

  return <h1>Home</h1>
}
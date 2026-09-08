import { useUser } from "@/contexts/UserContext"
import { Navigate, Outlet, useLocation } from "react-router"

export default function Auth() {
  const user = useUser()
  const from = useLocation()

  if (user) return <Outlet />

  return <Navigate to='/login' state={{ from }} />
}
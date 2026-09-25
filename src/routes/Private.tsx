import { Outlet, Redirect } from "@dundunlabs/router";
import { useUser } from "../contexts/UserContext";

export default function Private() {
  const user = useUser()

  if (user) return <Outlet />

  return <Redirect to='/login' replace />
}
import { use, useSyncExternalStore } from "react"
import { auth } from "../lib/firebase"
import UserContext from "../contexts/UserContext"
import { Outlet } from '@dundunlabs/router'

const ready = auth.authStateReady()
const onAuthStateChanged = (fn: VoidFunction) => auth.onAuthStateChanged(fn)
const getUser = () => auth.currentUser

export default function Auth() {
  use(ready)
  const user = useSyncExternalStore(onAuthStateChanged, getUser)

  return (
    <UserContext value={user}>
      <Outlet />
    </UserContext>
  )
}
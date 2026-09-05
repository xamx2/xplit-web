import UserContext from '@/contexts/UserContext'
import auth from '@/lib/firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { use, useSyncExternalStore } from 'react'
import { Outlet } from 'react-router'

const onUserChange = (cb: VoidFunction) => onAuthStateChanged(auth, cb)
const getUser = () => auth.currentUser
const authReady = auth.authStateReady()

export default function Root() {
  use(authReady)
  const user = useSyncExternalStore(onUserChange, getUser)

  return (
    <UserContext value={user}>
      <Outlet />
    </UserContext>
  )
}
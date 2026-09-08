import Page from "@/components/Page"
import { useUser } from "@/contexts/UserContext"
import { Navigate } from "react-router"

export function Component() {
  const user = useUser()

  if (user) return <Navigate to='home' replace />

  return (
    <Page
      title="Xplit"
      description="Group expenses sharing app"
      actions={[{ path: 'home', 'name': 'Get started' }]}
    />
  )
}
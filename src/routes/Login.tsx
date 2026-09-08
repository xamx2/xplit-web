import Page from "@/components/Page";
import auth, { PROVIDERS } from "@/lib/firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";

export function Component() {
  const { state } = useLocation()
  const navigate = useNavigate()

  return (
    <Page title="Sign In">
      <div>
        {PROVIDERS.map(({ name, provider }) => (
          <button
            key={name}
            onClick={() => signInWithPopup(auth, provider).then(() => navigate(state?.from || '/', { replace: true }))}
          >
            Sign in with {name}
          </button>
        ))}
      </div>
    </Page>
  )
}
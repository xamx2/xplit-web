import { useRouter } from "@dundunlabs/router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";
import Page from "../components/Page";

const providers = [
  {
    provider: new GoogleAuthProvider(),
    name: 'Google'
  }
]

export default function Login() {
  const router = useRouter()

  return (
    <Page title="Login">
      {providers.map(({ provider, name }, i) => (
        <button
          key={i}
          onClick={async () => {
            await signInWithPopup(auth, provider)
            router.replace('/home')
          }}
        >
          Login with {name}
        </button>
      ))}
    </Page>
  )
}
import { signOut } from "firebase/auth";
import Page from "../components/Page";
import { auth } from "../lib/firebase";
import { useRouter } from "@dundunlabs/router";

export default function Profile() {
  const router = useRouter()

  return (
    <Page title="Profile">
      <button
        onClick={async () => {
          await signOut(auth)
          router.push('/')
        }}
      >
        Logout
      </button>
    </Page>
  )
}
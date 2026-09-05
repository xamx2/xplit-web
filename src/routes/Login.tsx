import auth, { PROVIDERS } from "@/lib/firebase/auth";
import { signInWithPopup } from "firebase/auth";

export function Component() {
  return PROVIDERS.map(({ name, provider }) => (
    <button key={name} onClick={() => signInWithPopup(auth, provider)}>
      Login with {name}
    </button>
  ))
}
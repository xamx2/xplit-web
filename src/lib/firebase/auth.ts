import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "./app";

export default getAuth(app)

export const PROVIDERS = [
  {
    name: 'Google',
    provider: new GoogleAuthProvider()
  }
]
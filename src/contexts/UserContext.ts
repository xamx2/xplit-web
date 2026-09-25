import type { User } from "firebase/auth";
import { createContext, useContext } from "react";

const UserContext = createContext<User | null>(null)

export const useUser = () => useContext(UserContext)

export default UserContext


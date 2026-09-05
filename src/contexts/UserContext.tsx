import type { User } from "firebase/auth";
import { createContext, useContext } from "react";

const UserContext = createContext<User | null | undefined>(undefined)

export const useUser = () => useContext(UserContext)

export default UserContext
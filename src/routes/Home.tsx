import { Link } from "@dundunlabs/router";
import { useUser } from "../contexts/UserContext";

export default function Home() {
  const user = useUser()

  if (!user) throw 401

  return (
    <>
      <header>
        <h3>
          Hi{' '}
          <Link to='/profile'>
            {user.displayName}
          </Link>
          {' '}👋
        </h3>
        <p>Lets split the bill with your friends.</p>
      </header>
    </>
  )
}
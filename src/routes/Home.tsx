import { Link } from "@dundunlabs/router";
import { useUser } from "../contexts/UserContext";
import Groups from "./components/Groups";
import { Suspense } from "react";
import Loading from "../components/Loading";

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
      </header>
      <hr />
      <main>
        <div>
          <p>Lets split the bill with your groups</p>
          <Suspense fallback={<Loading />}>
            <Groups />
          </Suspense>
          <Link to='/groups/new'>
            Create new group
          </Link>
        </div>
      </main>
    </>
  )
}
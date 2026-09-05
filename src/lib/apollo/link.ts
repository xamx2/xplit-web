import { HttpLink } from "@apollo/client"
import { SetContextLink } from "@apollo/client/link/context"
import auth from "../firebase/auth"

const httpLink = new HttpLink({ uri: import.meta.env.PUBLIC_GRAPHQL_URI })

const authLink = new SetContextLink(async ctx => {
  const token = await auth.currentUser?.getIdToken()
  if (!token) return ctx

  return {
    ...ctx,
    headers: {
      ...ctx.headers,
      Authorization: 'Bearer ' + token
    }
  }
})

export default authLink.concat(httpLink)
import { HttpLink } from "@apollo/client"

const httpLink = new HttpLink({ uri: import.meta.env.PUBLIC_GRAPHQL_URI })

export default httpLink
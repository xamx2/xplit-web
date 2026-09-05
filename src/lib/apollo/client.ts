import { ApolloClient } from "@apollo/client";
import link from './link'
import cache from "./cache";

export default new ApolloClient({ link, cache })
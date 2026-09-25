import { RouterProvider } from "@dundunlabs/router";
import Routes from "./routes";
import router from "./lib/router";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./lib/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
    </ApolloProvider>
  );
};

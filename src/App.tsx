import { RouterProvider } from "@dundunlabs/router";
import Routes from "./routes";
import router from "./lib/router";

export default function App() {
  return (
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  );
};

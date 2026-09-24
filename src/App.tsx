import { BrowserRouter, RouterProvider } from "@dundunlabs/router";
import Routes from "./routes";

const router = new BrowserRouter()

export default function App() {
  return (
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  );
};

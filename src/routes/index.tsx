import { createRoutes } from "@dundunlabs/router";
import Home from "./Home";

export default createRoutes([
  {
    path: '/',
    Component: Home
  }
])
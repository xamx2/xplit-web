import { createBrowserRouter } from "react-router";

export default createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        lazy: () => import('@/routes/Home')
      }
    ]
  }
])
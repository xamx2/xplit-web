import { createBrowserRouter } from "react-router";
import Root from "@/routes/Root";

export default createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        lazy: () => import('@/routes/Home')
      },
      {
        path: 'login',
        lazy: () => import('@/routes/Login')
      },
      {
        path: 'groups',
        children: [
          {
            path: 'new',
            lazy: () => import('@/routes/NewGroup')
          },
          {
            path: ':groupId',
            lazy: () => import('@/routes/Group')
          }
        ]
      }
    ]
  }
])
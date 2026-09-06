import { createBrowserRouter, Navigate } from "react-router";
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
            lazy: () => import('@/routes/Group'),
            children: [
              {
                index: true,
                element: <Navigate to='transactions' replace />
              },
              {
                path: 'transactions',
                lazy: () => import('@/routes/Transactions')
              }
            ]
          }
        ]
      }
    ]
  }
])
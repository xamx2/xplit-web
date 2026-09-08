import { createBrowserRouter, Navigate } from "react-router";
import Root from "@/routes/Root";
import Auth from "./routes/Auth";

export default createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        lazy: () => import('@/routes/Top')
      },
      {
        path: 'login',
        lazy: () => import('@/routes/Login')
      },
      {
        Component: Auth,
        children: [
          {
            path: 'home',
            lazy: () => import('@/routes/Home'),
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
                  },
                  {
                    path: 'members',
                    lazy: () => import('@/routes/Members'),
                  }
                ]
              },
              {
                path: ':groupId',
                children: [
                  {
                    path: 'members/new',
                    lazy: () => import('@/routes/NewMember')
                  },
                  {
                    path: 'transactions/new',
                    lazy: () => import('@/routes/NewTransaction')
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
])
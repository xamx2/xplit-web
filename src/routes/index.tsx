import { createRoutes } from "@dundunlabs/router";
import Auth from "./Auth";
import Root from "./Root";
import Home from "./Home";
import Login from "./Login";
import Private from "./Private";
import Profile from "./Profile";
import NewGroup from "./NewGroup";
import Group from "./Group";
import GroupTransactions from "./GroupTransactions";

export default createRoutes([
  {
    Component: Auth,
    children: [
      {
        path: '/',
        Component: Root
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        Component: Private,
        children: [
          {
            path: 'home',
            Component: Home
          },
          {
            path: 'profile',
            Component: Profile
          },
          {
            path: 'groups',
            children: [
              {
                path: 'new',
                Component: NewGroup
              },
              {
                path: ':groupId',
                Component: Group,
                children: [
                  {
                    path: '/',
                  },
                  {
                    path: 'transactions',
                    Component: GroupTransactions
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
])
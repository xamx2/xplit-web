import { RouterProvider } from 'react-router';
import router from '@/router';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/lib/apollo/client';

import '@/App.css';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};

export default App;

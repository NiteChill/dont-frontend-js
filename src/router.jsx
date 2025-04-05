import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Landing } from './pages/landing';
import { Messages } from './pages/messages';
import { Gmail } from './pages/gmail';
import { X } from './pages/X';
import { Tinder } from './pages/Tinder';
import { Layout } from './components/layout';
import { ArcadeLanding } from './pages/arcadeLanding';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/start',
        element: <ArcadeLanding />
      },
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/messages',
            element: <Messages />,
          },
          {
            path: '/gmail',
            element: <Gmail />,
          },
          {
            path: '/x',
            element: <X />,
          },
          {
            path: '/tinder',
            element: <Tinder />,
          },
        ],
      },
    ],
  },
]);

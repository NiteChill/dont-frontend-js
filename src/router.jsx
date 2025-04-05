import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Landing } from './pages/landing';
import { Messages } from './pages/messages';
import { Gmail } from './pages/gmail';
import { X } from './pages/X';
import { Tinder } from './pages/Tinder';
import { Layout } from './components/layout';
import { GameKeys } from './constants/games';

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
        path: '/',
        element: <Layout />,
        children: [
          {
            path: `/${GameKeys.Chat}`,
            element: <Messages />,
          },
          {
            path: `/${GameKeys.Mail}`,
            element: <Gmail />,
          },
          {
            path: `/${GameKeys.SocialMedia}`,
            element: <X />,
          },
          {
            path: `/${GameKeys.Hookup}`,
            element: <Tinder />,
          },
        ],
      },
    ],
  },
]);

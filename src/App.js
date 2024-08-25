import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },

    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/services',
      element: <Services />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

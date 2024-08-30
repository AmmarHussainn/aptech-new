import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Contact } from './pages/Contact';
import { Courses } from './pages/Courses';
import Applynow from './pages/Applynow';


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
      path: '/courses',
      element: <Courses />,
    },
    {
      path: '/applynow',
      element: <Applynow />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;

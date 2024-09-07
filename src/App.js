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
import Counsultancy from './pages/Counsultancy';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Gallery from './pages/Gallery';
import UserDetails from './pages/UserDetails';


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
    },
    {
      path: 'counsultancy',
      element: <Counsultancy />,
    },
    {
      path: 'mission',
      element: <Mission/>,
    },
    {
      path: 'vision',
      element: <Vision/>,
    },
    {
      path: 'gallery',
      element: <Gallery/>,
    },
    {
      path : 'userdetails',
      element : <UserDetails/>
    }

   
  ]);
  return <RouterProvider router={router} />;
}

export default App;

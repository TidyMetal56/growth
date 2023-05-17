import { createBrowserRouter } from 'react-router-dom'
import Calculator from './Calculator';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Error from './Error';
import Information from './Information';

const router = createBrowserRouter([
    {
        path: '/growth/public/',
        element: <Home/>
    },
    {
        path: '/Login',
        element: <Login/>
    },
    {
        path: '/Register',
        element: <Register/>
    },
    {
        path: '/Calculator',
        element: <Calculator/>
    },
    {
        path: '/Information',
        element: <Information/>
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router;
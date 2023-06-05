import { createBrowserRouter } from 'react-router-dom'
import Calculator from './Calculator';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Error from './Error';
import Information from './Information';
import Law from './LaborLaw';
import Index from './Index';

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
        path: '/Law',
        element: <Law/>
    },
    {
        path: '/Index',
        element: <Index/>
    },
    {
        path: '*',
        element: <Error />
    }

])

export default router;
import { lazy } from 'react';
import btRoutes from './braintree/routes';

const routes = [
    {
        path: 'braintree',
        label: 'Braintree',
        element: lazy(() => import('../layouts/AppLayout')),
        children: btRoutes
    }
];

export default routes;

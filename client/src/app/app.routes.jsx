import { lazy } from 'react'
import btRoutes from './braintree/braintree.routes.jsx'
import ppRoutes from './paypal/paypal.routes.jsx'

const routes = [
    {
        path: 'braintree',
        label: 'Braintree',
        element: lazy(() => import('../layouts/AppLayout.component.jsx')),
        children: btRoutes,
    },
    {
        path: 'paypal',
        label: 'PayPal',
        element: lazy(() => import('../layouts/AppLayout.component.jsx')),
        children: ppRoutes,
    },
]

export default routes

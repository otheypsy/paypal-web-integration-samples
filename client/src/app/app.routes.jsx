import { lazy } from 'react'
import btRoutes from './braintree/bt.routes.jsx'
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
    {
        label: 'YOLO',
        path: 'yolo',
        element: lazy(() => import('./yolo/Yolo.jsx')),
    },
]

export default routes

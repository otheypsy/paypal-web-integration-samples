import { lazy } from 'react'

const routes = [
    {
        label: 'PPCheckout',
        path: 'pp-xo',
        element: lazy(() => import('./pages/PPCheckout/PayPalCheckout.jsx')),
    },
    {
        label: 'PPHostedFields',
        path: 'pp-hosted-fields',
        element: lazy(() => import('./pages/PPHostedFields/PayPalCheckoutDCC.jsx')),
    },
]

export default routes

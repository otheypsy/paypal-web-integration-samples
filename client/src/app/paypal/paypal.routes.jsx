import { lazy } from 'react'

const routes = [
    {
        label: 'PPCheckout',
        path: 'pp-xo',
        element: lazy(() => import('./pages/PPCheckout/PPCheckout.component.jsx')),
    },
    {
        label: 'PPHostedFields',
        path: 'pp-hosted-fields',
        element: lazy(() => import('./pages/PPHostedFields/PPHostedFields.component.jsx')),
    },
]

export default routes

import { lazy } from 'react'

const routes = [
    {
        path: 'transaction',
        label: 'Transaction',
        element: lazy(() => import('../../../../../layouts/PageLayout.component.jsx')),
        children: [
            {
                path: 'sale',
                label: 'Sale',
                element: lazy(() => import('./sections/Sale.component.jsx')),
            },
            {
                path: 'find',
                label: 'Find',
                element: lazy(() => import('./sections/Find.component.jsx')),
            },
        ],
    },
]

export default routes

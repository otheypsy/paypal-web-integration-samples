import { lazy } from 'react'

const routes = [
    {
        path: 'customer',
        label: 'Customer',
        element: lazy(() => import('../../../../../layouts/PageLayout.component.jsx')),
        children: [
            {
                path: 'create',
                label: 'Create',
                element: lazy(() => import('./sections/Create.component.jsx')),
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

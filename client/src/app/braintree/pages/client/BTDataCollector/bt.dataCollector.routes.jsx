import { lazy } from 'react'

const routes = [
    {
        path: 'data-collector',
        label: 'Data Collector',
        element: lazy(() => import('../../../../../layouts/PageLayout.component.jsx')),
        children: [
            {
                path: 'basic',
                label: 'Basic',
                element: lazy(() => import('./sections/BasicDataCollector.component.jsx')),
            },
        ],
    },
]

export default routes

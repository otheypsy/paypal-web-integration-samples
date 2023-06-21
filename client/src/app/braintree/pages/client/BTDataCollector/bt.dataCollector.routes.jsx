import { lazy } from 'react'

const routes = [
    {
        path: 'data-collector',
        label: 'Data Collector',
        element: lazy(() => import('./BTDataCollector.component.jsx')),
    },
]

export default routes

import { lazy } from 'react'

const routes = [
    {
        path: 'ach',
        label: 'ACH Direct Debit',
        element: lazy(() => import('../../../../../layouts/PageLayout.component.jsx')),
        children: [
            {
                path: 'independent-check',
                label: 'Independent Check',
                element: lazy(() => import('./sections/IndependentCheck.jsx')),
            },
            {
                path: 'tokenized-check',
                label: 'Tokenized Check',
                element: lazy(() => import('./sections/IndependentCheck.jsx')),
            },
        ],
    },
]

export default routes

import { lazy } from 'react'

const routes = [
    {
        path: 'client-instance',
        label: 'Client Instance',
        element: lazy(() => import('../../../../../layouts/PageLayout.component.jsx')),
        children: [
            {
                path: 'client-token',
                label: 'Client Token',
                element: lazy(() => import('./sections/ClientToken.component.jsx')),
            },
            {
                path: 'tokenization-key',
                label: 'Tokenization Key',
                element: lazy(() => import('./sections/TokenizationKey.component.jsx')),
            },
        ],
        data: {
            tags: ['server'],
        },
    },
]

export default routes

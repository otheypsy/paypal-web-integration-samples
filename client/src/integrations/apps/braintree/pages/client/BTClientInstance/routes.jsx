import { lazy } from 'react'

const routes = [
    {
        path: 'client-instance',
        label: 'Client Instance',
        element: lazy(() => import('../../../../../layouts/PageLayout')),
        children: [
            {
                path: 'client-token',
                label: 'Client Token',
                element: lazy(() => import('./sections/ClientToken.component')),
            },
            {
                path: 'tokenization-key',
                label: 'Tokenization Key',
                element: lazy(() => import('./sections/TokenizationKey.component')),
            },
        ],
        data: {
            tags: ['server'],
        },
    },
]

export default routes

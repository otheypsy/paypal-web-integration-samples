import { lazy } from 'react'

const routes = [
    {
        path: 'pwpp-checkout',
        label: 'PwPP - Checkout',
        element: lazy(() => import('../../../../../layouts/PageLayout.component.jsx')),
        children: [
            {
                path: 'Checkout',
                label: 'Checkout',
                element: lazy(() => import('./sections/Checkout.jsx')),
            },
        ],
        data: {
            tags: ['server'],
        },
    },
]

export default routes

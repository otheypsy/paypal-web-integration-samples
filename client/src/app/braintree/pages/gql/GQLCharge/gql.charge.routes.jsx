import { lazy } from 'react'

const routes = [
    {
        path: 'charge',
        label: 'Charge',
        element: lazy(() => import('../../../../../layouts/PageLayout.component.jsx')),
        children: [
            {
                path: 'credit-card',
                label: 'CreditCard',
                element: lazy(() => import('./sections/ChargeCreditCard.jsx')),
            },
        ],
    },
]

export default routes

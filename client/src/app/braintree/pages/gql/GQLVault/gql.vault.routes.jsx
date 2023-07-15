import { lazy } from 'react'

const routes = [
    {
        path: 'vault',
        label: 'Vault',
        element: lazy(() => import('../../../../../layouts/PageLayout.component.jsx')),
        children: [
            {
                path: 'credit-card',
                label: 'CreditCard',
                element: lazy(() => import('./sections/VaultCreditCard.jsx')),
            },
        ],
    },
]

export default routes

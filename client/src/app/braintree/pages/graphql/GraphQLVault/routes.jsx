import { lazy } from 'react'

const routes = [
    {
        label: 'CreditCard',
        path: '/credit-card',
        component: lazy(() => import('./sections/VaultCreditCard.jsx')),
    },
    {
        label: 'PayPal',
        path: '/paypal',
        component: lazy(() => import('./sections/VaultCreditCard.jsx')),
    },
]

export default routes

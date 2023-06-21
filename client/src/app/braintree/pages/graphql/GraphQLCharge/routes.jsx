import { lazy } from 'react'

const routes = [
    {
        label: 'CreditCard',
        path: '/credit-card',
        component: lazy(() => import('./sections/ChargeCreditCard.jsx')),
    },
    {
        label: 'PayPal',
        path: '/paypal',
        component: lazy(() => import('./sections/ChargeCreditCard.jsx')),
    },
]

export default routes

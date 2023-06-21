import { lazy } from 'react'

const routes = [
    {
        label: 'ChargePaymentMethods',
        path: '/charge-payment-methods',
        element: lazy(() => import('./GraphQLCharge/GraphQLCharge.jsx')),
    },
    {
        label: 'VaultPaymentMethods',
        path: '/vault-payment-methods',
        element: lazy(() => import('./GraphQLVault/GraphQLVault.jsx')),
    },
]

export default routes

import { lazy } from 'react'

const routes = [
    {
        label: 'Transactions',
        path: '/transactions',
        element: lazy(() => import('./BraintreeTransactions/BraintreeTransactions.jsx')),
    },
    {
        label: 'Customers',
        path: '/customers',
        element: lazy(() => import('./BraintreeCustomers/BraintreeCustomers.jsx')),
    },
    {
        label: 'Vault',
        path: '/vault',
        element: lazy(() => import('./BraintreeVault/BraintreeVault.jsx')),
    },
    {
        label: 'Subscriptions',
        path: '/subscriptions',
        element: lazy(() => import('./BraintreeSubscriptions/BraintreeSubscriptions.jsx')),
    },
]

export default routes

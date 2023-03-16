import { lazy } from 'react';

const routes = [
    {
        label: 'Transactions',
        path: '/transactions',
        element: lazy(() => import('./BraintreeTransactions/BraintreeTransactions'))
    },
    {
        label: 'Customers',
        path: '/customers',
        element: lazy(() => import('./BraintreeCustomers/BraintreeCustomers'))
    },
    {
        label: 'Vault',
        path: '/vault',
        element: lazy(() => import('./BraintreeVault/BraintreeVault'))
    },
    {
        label: 'Subscriptions',
        path: '/subscriptions',
        element: lazy(() => import('./BraintreeSubscriptions/BraintreeSubscriptions'))
    }
];

export default routes;

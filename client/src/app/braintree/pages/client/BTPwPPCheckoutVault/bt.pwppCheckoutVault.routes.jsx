import { lazy } from 'react'

const routes = [
    {
        path: 'pwpp-checkout-vault',
        label: 'PwPP - Checkout + Vault',
        element: lazy(() => import('../../../../../layouts/PageLayout.component.jsx')),
        children: [
            {
                path: 'new-customer',
                label: 'New Customer',
                element: lazy(() => import('./sections/NewCustomer.jsx')),
            },
            {
                label: 'Returning Customer',
                path: 'returning-customer',
                element: lazy(() => import('./sections/ReturningCustomer.jsx')),
            },
            {
                label: 'Merchant Initiated',
                path: 'merchant-initiated',
                element: lazy(() => import('./sections/MerchantInitiated.jsx')),
            },
        ],
    },
]

export default routes

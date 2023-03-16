import { lazy } from "react";

const routes = [
    {
        label: 'CreditCard',
        path: '/credit-card',
        component: lazy(() => import('./sections/VaultCreditCard'))
    },
    {
        label: 'PayPal',
        path: '/paypal',
        component: lazy(() => import('./sections/VaultCreditCard'))
    }
]

export default routes;

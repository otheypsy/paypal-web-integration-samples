import { lazy } from "react";

const routes = [
    {
        label: 'CreditCard',
        path: '/credit-card',
        component: lazy(() => import('./sections/ChargeCreditCard'))
    },
    {
        label: 'PayPal',
        path: '/paypal',
        component: lazy(() => import('./sections/ChargeCreditCard'))
    }
]

export default routes;

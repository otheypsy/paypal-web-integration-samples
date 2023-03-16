import { lazy } from 'react';

const routes = [
    {
        path: 'pwpp-checkout',
        label: 'PwPP - Checkout',
        element: lazy(() => import('../../../../../layouts/PageLayout')),
        children: [
            {
                path: 'Checkout',
                label: 'Checkout',
                element: lazy(() => import('./sections/Checkout'))
            }
        ],
        data: {
            tags: [
                'server'
            ]
        }
    }
];

export default routes


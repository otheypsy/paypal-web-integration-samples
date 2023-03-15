import { lazy } from 'react';

const routes = [
    {
        path: 'data-collector',
        label: 'Data Collector',
        element: lazy(() => import('../../../../../layouts/PageLayout')),
        children: [
            {
                path: 'all',
                label: 'All',
                element: lazy(() => import('./sections/All'))
            }
        ]
    }
];

export default routes;

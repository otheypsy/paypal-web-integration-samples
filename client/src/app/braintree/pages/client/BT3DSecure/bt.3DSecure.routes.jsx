import { lazy } from 'react'

const routes = [
    {
        path: '3ds',
        label: '3D Secure',
        element: lazy(() => import('./BT3DSecure.component.jsx')),
    },
]

export default routes

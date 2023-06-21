import { mapPageRoutes } from '../../services/router.service.jsx'
// import graphqlRoutes from './pages/graphql/BtDataCollectorRoutes';
import clientRoutes from './pages/client/bt.client.routes.jsx'
// import serverRoutes from './pages/server/BtDataCollectorRoutes';
import { lazy } from 'react'

const routes = [
    //..._mapPageRoutes(graphqlRoutes, 'graphql'),
    ...mapPageRoutes(clientRoutes, 'client'),
    //..._mapPageRoutes(serverRoutes, 'server')
]

routes.push({
    label: 'YOLO',
    path: 'yolo',
    element: lazy(() => import('./pages/yolo/Yolo.jsx')),
    data: {
        tags: ['server', 'graphql', 'client'],
    },
})

export default routes

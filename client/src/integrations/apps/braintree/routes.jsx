// import graphqlRoutes from './pages/graphql/routes';
import clientRoutes from './pages/client/routes'
// import serverRoutes from './pages/server/routes';
import { lazy } from 'react'

const _mapPageRoutes = (routes, pageTag) => {
    return routes.map((route) => {
        const tags = [pageTag, ...(route?.data?.tags ? route.data.tags : [])]
        return {
            ...route,
            data: {
                ...route.data,
                tags: [...new Set(tags)],
            },
        }
    })
}

const routes = [
    //..._mapPageRoutes(graphqlRoutes, 'graphql'),
    ..._mapPageRoutes(clientRoutes, 'client'),
    //..._mapPageRoutes(serverRoutes, 'server')
]

routes.push({
    label: 'YOLO',
    path: 'yolo',
    element: lazy(() => import('./pages/yolo/Yolo')),
    data: {
        tags: ['server', 'graphql', 'client'],
    },
})

export default routes

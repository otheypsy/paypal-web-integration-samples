import { tagPageRoutes } from '../../services/router.service.tsx'
import graphqlRoutes from './pages/gql/bt.gql.routes.jsx'
import clientRoutes from './pages/client/bt.client.routes.jsx'
import serverRoutes from './pages/server/bt.server.routes.jsx'

const routes = [
    ...tagPageRoutes(clientRoutes, 'client'),
    ...tagPageRoutes(graphqlRoutes, 'gql'),
    ...tagPageRoutes(serverRoutes, 'server'),
]

export default routes

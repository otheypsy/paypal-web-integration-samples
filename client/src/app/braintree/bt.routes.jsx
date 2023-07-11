import { mapPageRoutes } from '../../services/router.service.jsx'
import graphqlRoutes from './pages/graphql/gql.routes.jsx'
import clientRoutes from './pages/client/bt.client.routes.jsx'
// import serverRoutes from './pages/server/BtDataCollectorRoutes';

const routes = [
    ...mapPageRoutes(graphqlRoutes, 'graphql'),
    ...mapPageRoutes(clientRoutes, 'client'),
    //..._mapPageRoutes(serverRoutes, 'server')
]

export default routes

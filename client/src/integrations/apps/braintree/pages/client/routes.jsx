import routes1 from './BTClientInstance/routes'
import routes2 from './BTDataCollector/routes'
import routes3 from './BTPwPPCheckout/routes'
import routes4 from './BTPwPPCheckoutVault/routes'
import routes5 from './BTPwPPVault/routes'

const routes = [...routes1, ...routes2, ...routes3, ...routes4, ...routes5]

export default routes

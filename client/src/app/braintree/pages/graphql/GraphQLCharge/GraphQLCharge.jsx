import React from 'react'
import { CustomRouter } from 'pp-framework-react'
import routes from './gql.charge.routes.jsx'
import PageLayout from '../../../../../layouts/PageLayout.component.jsx'

const GraphQLCharge = (props) => {
    return (
        <React.Fragment>
            <h3>GraphQL - Charge Payment Methods</h3>
            <hr />
            <CustomRouter mountPath={props.match.path} routes={routes} layout={PageLayout} />
        </React.Fragment>
    )
}

export default GraphQLCharge

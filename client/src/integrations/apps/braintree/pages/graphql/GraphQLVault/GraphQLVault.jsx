import React from 'react';
import { CustomRouter } from "pp-framework-react";
import routes from "./routes";
import PageLayout from "../../../../../layouts/PageLayout";

const GraphQLVault = (props) => {

    return (
        <React.Fragment>
            <h3>GraphQL - Vault Payment Methods</h3>
            <hr />
            <CustomRouter
                mountPath={props.match.path}
                routes={routes}
                layout={PageLayout}
            />
        </React.Fragment>
    )
}

export default GraphQLVault;

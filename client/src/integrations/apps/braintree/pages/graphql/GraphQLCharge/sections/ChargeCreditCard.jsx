import React, { useContext } from  'react';
import BusyContext from "../../../../../../context/BusyContext";
import OutputContext from "../../../../../../context/OutputContext";
import BraintreeService from "../../../../services/BraintreeService";
import withGQLQuery from "../../../../layouts/withGQLQuery";
import ChargeMutations from '../../schema/mutations/charge';

const ChargeCreditCard = (props) => {

    const outputContext = useContext(OutputContext);
    const busyContext = useContext(BusyContext);

    const process = async () => {
        busyContext.add();
        const finalQuery = props.query.join('\n\n');
        outputContext.add('ChargeCreditCard', await BraintreeService.graphQL.request(finalQuery, props.variables));
        busyContext.remove()
    };

    return <button className="btn btn-outline-success" onClick={process}>Process</button>;

}

export default withGQLQuery(ChargeCreditCard, ChargeMutations.creditCard.query, ChargeMutations.creditCard.variables);

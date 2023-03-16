import React, { useState, useContext } from 'react';
import { OutputJson } from 'pp-framework-react';
import BraintreeTransactionsService from '../../../../services/BraintreeTransactionsService';
import BusyContext from "../../../../../../context/BusyContext";

const Settle = (props) => {

    const busyContext = useContext(BusyContext);
    const [postData, setPostData] = useState(BraintreeTransactionsService.postData.settle);

    const onChangePostData = (value) => setPostData(value);

    const settleTransaction = async () => {
        busyContext.addBusy('btTransactionSettle');
        const response = await BraintreeTransactionsService.settle(props.integration, postData);
        busyContext.removeBusy('btTransactionSettle');
        props.onOutput(response, 'FindTransaction');
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <h5>Arguments and Parameters</h5>
                    <OutputJson
                        content={postData}
                        isEditable={true}
                        onChange={onChangePostData}
                    />
                </div>
                <div className="col-4">
                    <button
                        className="btn btn-outline-success"
                        onClick={settleTransaction}>
                        Settle
                    </button>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Settle;

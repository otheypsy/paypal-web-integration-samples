import React, { useContext, useState } from 'react';
import { OutputJson } from 'pp-framework-react';
import BraintreeCustomersService from '../../../../services/BraintreeCustomersService';
import BusyContext from "../../../../../../context/BusyContext";


const Find = (props) => {

    const busyContext = useContext(BusyContext);
    const [postData, setPostData] = useState(BraintreeCustomersService.postData.find);

    const onChangePostData = (value) => setPostData(value);

    const findCustomer = async () => {
        busyContext.addBusy('btCustomerFind');
        const response = await BraintreeCustomersService.find(props.integration, postData.arguments.customerId);
        busyContext.removeBusy('btCustomerFind');
        props.onOutput(response, 'FindCustomer');
    };

    const deleteCustomer = async () => {
        busyContext.addBusy('btCustomerDelete');
        const response = await BraintreeCustomersService.delete(props.integration, postData.arguments.customerId);
        busyContext.removeBusy('btCustomerDelete');
        props.onOutput(response, 'DeleteCustomer');
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <OutputJson
                        content={postData}
                        isEditable={true}
                        onChange={onChangePostData}
                    />
                </div>
                <div className="col-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button
                            className="btn btn-outline-success"
                            onClick={findCustomer}>
                            Find
                        </button>
                        <button
                            className="btn btn-outline-danger"
                            onClick={deleteCustomer}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Find;

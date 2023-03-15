import React, { useContext, useState } from 'react';
import { OutputJson } from 'pp-framework-react';
import BraintreeVaultService from '../../../../services/BraintreeVaultService';
import BusyContext from "../../../../../../context/BusyContext";


const Find = (props) => {

    const busyContext = useContext(BusyContext);
    const [postData, setPostData] = useState(BraintreeVaultService.postData.find);

    const onChangePostData = (value) => setPostData(value);

    const findVaultToken = async () => {
        busyContext.addBusy('btVaultFind');
        const response = await BraintreeVaultService.find(props.integration, postData.arguments.token);
        busyContext.removeBusy('btVaultFind');
        props.onOutput(response, 'VaultFind');
    };

    const deleteVaultToken = async () => {
        busyContext.addBusy('btVaultDelete');
        const response = await BraintreeVaultService.delete(props.integration, postData.arguments.token);
        busyContext.removeBusy('btVaultDelete');
        props.onOutput(response, 'VaultDelete');
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
                            onClick={findVaultToken}>
                            Find
                        </button>
                        <button
                            className="btn btn-outline-danger"
                            onClick={deleteVaultToken}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Find;
